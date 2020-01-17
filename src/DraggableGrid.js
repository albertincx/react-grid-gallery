import React, { Component } from 'react';

class BoxesGroup extends Component {
  constructor(props) {
    super(props);
    let boxes = props.items.map((el, ind) => ({ ...el, id: ind }));
    this.state = { boxes };
  }

  swapBoxes = (fromBox, toBox) => {
    let boxes = this.state.boxes.slice();
    let fromIndex = -1;
    let toIndex = -1;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].id === fromBox.id) {
        fromIndex = i;
      }
      if (boxes[i].id === toBox.id) {
        toIndex = i;
      }
    }

    if (fromIndex !== -1 && toIndex !== -1) {
      let { fromId, ...fromRest } = boxes[fromIndex];
      let { toId, ...toRest } = boxes[toIndex];
      boxes[fromIndex] = { id: fromBox.id, ...toRest };
      boxes[toIndex] = { id: toBox.id, ...fromRest };
      this.setState({ boxes: boxes }, () => this.props.onDrop(boxes));
    }
  };

  handleDragStart = id => event => {
    let fromBox = JSON.stringify({ id });
    event.dataTransfer.setData('dragContent', fromBox);
  };

  handleDragOver = () => event => {
    event.preventDefault(); // Necessary. Allows us to drop.
    return false;
  };

  handleDrop = id => event => {
    event.preventDefault();
    let fromBox = JSON.parse(event.dataTransfer.getData('dragContent'));
    let toBox = { id };
    this.swapBoxes(fromBox, toBox);
    return false;
  };

  makeBoxes = () => {
    return this.state.boxes.map((box) => (
      <div
        key={box.id}
        className="box"
        draggable
        onDragStart={this.handleDragStart(box.id)}
        onDragOver={this.handleDragOver()}
        onDrop={this.handleDrop(box.id)}
      >
        <div className="content">{this.props.renderItem(box)}</div>
      </div>
    ));
  };

  render() {
    const { bbtn } = this.props;
    return <div className="boxesGroup">
      {bbtn}
      {this.makeBoxes()}
    </div>;
  }
}

export default BoxesGroup;
