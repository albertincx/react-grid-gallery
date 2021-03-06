import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Image from './Image.js';
import DraggableGrid from './DraggableGrid.js';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images,
      selLen: 0,
      thumbnails: [],
      lightboxIsOpen: this.props.isOpen,
      currentImage: this.props.currentImage,
      containerWidth: 0,
    };
    Gallery.rowHeight = this.props.rowHeight;
    Gallery.margin = this.props.margin;
    Gallery.maxRows = this.props.maxRows;

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.onClickImage = this.onClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  static rowHeight;
  static margin;
  static maxRows;

  componentDidMount() {
    this.onResize();
  }

  static getDerivedStateFromProps(props, state) {
    let selLen = props.images.filter(i => i.isSelected).length;
    if (state.images !== props.images || props.maxRows !== props.maxRows ||
      selLen !== state.selLen) {
      return {
        images: props.images,
        selLen,
        thumbnails: Gallery.renderThumbs(Gallery._gallery.clientWidth,
          props.images),
      };
    }
    return null;
  }
  componentDidUpdate() {
    if (!Gallery._gallery) return;
    if (Gallery._gallery.clientWidth
      !== this.state.containerWidth) {
      this.onResize();
    }
  }

  onResize = () => {
    if (!Gallery._gallery) return;
    this.setState({
      containerWidth: Math.floor(Gallery._gallery.clientWidth),
      thumbnails: Gallery.renderThumbs(Gallery._gallery.clientWidth,
        this.state.images),
    });
  };

  openLightbox(index, event) {
    if (event) {
      event.preventDefault();
    }
    if (this.props.lightboxWillOpen) {
      this.props.lightboxWillOpen.call(this, index);
    }
    if (this.props.currentImageWillChange) {
      this.props.currentImageWillChange.call(this, index);
    }

    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    if (this.props.lightboxWillClose) {
      this.props.lightboxWillClose.call(this);
    }
    if (this.props.currentImageWillChange) {
      this.props.currentImageWillChange.call(this, 0);
    }

    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    if (this.props.currentImageWillChange) {
      this.props.currentImageWillChange.call(this, this.state.currentImage - 1);
    }
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    if (this.props.currentImageWillChange) {
      this.props.currentImageWillChange.call(this, this.state.currentImage + 1);
    }
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  onClickImage() {
    if (this.state.currentImage === this.props.images.length - 1)
      return;
    this.gotoNext();
  }

  onSelectImage(index, event) {
    event.preventDefault();
    if (this.props.onSelectImage)
      this.props.onSelectImage.call(this, index, this.state.images[index]);
  }

  gotoImage(index) {
    if (this.props.currentImageWillChange) {
      this.props.currentImageWillChange.call(this, index);
    }
    this.setState({
      currentImage: index,
    });
  }

  getOnClickThumbnailFn() {
    if (!this.props.onClickThumbnail && this.props.enableLightbox)
      return this.openLightbox;
    if (this.props.onClickThumbnail)
      return this.props.onClickThumbnail;
    return null;
  }

  static calculateCutOff(len, delta, items) {
    var cutoff = [];
    var cutsum = 0;
    for (var i in items) {
      var item = items[i];
      var fractOfLen = item.scaletwidth / len;
      cutoff[i] = Math.floor(fractOfLen * delta);
      cutsum += cutoff[i];
    }

    var stillToCutOff = delta - cutsum;
    while (stillToCutOff > 0) {
      for (i in cutoff) {
        cutoff[i]++;
        stillToCutOff--;
        if (stillToCutOff < 0) break;
      }
    }
    return cutoff;
  }

  static buildImageRow(items, containerWidth) {
    var row = [];
    var len = 0;
    var imgMargin = 2 * Gallery.margin;
    while (items.length > 0 && len < containerWidth) {
      var item = items.shift();
      row.push(item);
      len += (item.scaletwidth + imgMargin);
    }

    var delta = len - containerWidth;
    if (row.length > 0 && delta > 0) {
      var cutoff = Gallery.calculateCutOff(len, delta, row);
      for (var i in row) {
        var pixelsToRemove = cutoff[i];
        item = row[i];
        item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
        item.vwidth = item.scaletwidth - pixelsToRemove;
      }
    } else {
      for (var j in row) {
        item = row[j];
        item.marginLeft = 0;
        item.vwidth = item.scaletwidth;
      }
    }
    return row;
  }

  static setThumbScale(item) {
    item.scaletwidth =
      Math.floor(Gallery.rowHeight
        * (item.thumbnailWidth / item.thumbnailHeight));
  }

  static renderThumbs(containerWidth, images = []) {
    if (!images) return [];
    if (containerWidth === 0) return [];

    var items = images.slice();
    for (var t in items) {
      Gallery.setThumbScale(items[t]);
    }

    var thumbs = [];
    var rows = [];
    while (items.length > 0) {
      rows.push(Gallery.buildImageRow(items, containerWidth));
    }

    for (var r in rows) {
      for (var i in rows[r]) {
        var item = rows[r][i];
        if (Gallery.maxRows) {
          if (r < Gallery.maxRows) {
            thumbs.push(item);
          }
        } else {
          thumbs.push(item);
        }
      }
    }
    return thumbs;
  }

  onDrop = (thumbnails) => {
    // this.props.onDrop(thumbnails)
    this.setState({ thumbnails }, () => this.props.onDrop(thumbnails));
  };

  renderItem(item) {
    let idx = item.idx;
    return <Image
      key={'Image-' + idx + '-' + item.src}
      item={item}
      index={idx}
      DirItem={this.props.DirItem}
      margin={this.props.margin}
      height={this.props.rowHeight}
      isSelectable={this.props.enableImageSelection}
      onClick={this.getOnClickThumbnailFn()}
      onSelectImage={this.onSelectImage}
      tagStyle={this.props.tagStyle}
      tileViewportStyle={this.props.tileViewportStyle}
      thumbnailStyle={this.props.thumbnailStyle}
    />;
  }

  render() {
    const { isDraggable, backButton } = this.props;

    const { lightboxIsOpen, thumbnails } = this.state;
    var images = thumbnails.map((item, idx) => {
      if (typeof item.src !== 'undefined') item.idx = idx;
      return this.renderItem(item);
    });
    if (!isDraggable) images.unshift(backButton);
    return (
      <div id={this.props.id}
           className="ReactGridGallery"
           ref={(c) => Gallery._gallery = c}>
        {isDraggable && thumbnails.length ? (
          <DraggableGrid
            onDrop={this.onDrop}
            items={thumbnails}
            bbtn={backButton}
            renderItem={this.renderItem}
          />
        ) : images}
        <ModalGateway>
          {lightboxIsOpen && thumbnails.length ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                views={thumbnails}
                currentIndex={this.state.currentImage}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      nano: PropTypes.string,
      alt: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }),
      ),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      isSelected: PropTypes.bool,
      thumbnailCaption: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
    }),
  ).isRequired,
  id: PropTypes.string,
  enableImageSelection: PropTypes.bool,
  onSelectImage: PropTypes.func,
  rowHeight: PropTypes.number,
  maxRows: PropTypes.number,
  margin: PropTypes.number,
  onClickThumbnail: PropTypes.func,
  lightboxWillOpen: PropTypes.func,
  lightboxWillClose: PropTypes.func,
  enableLightbox: PropTypes.bool,
  backdropClosesModal: PropTypes.bool,
  currentImage: PropTypes.number,
  preloadNextImage: PropTypes.bool,
  customControls: PropTypes.arrayOf(PropTypes.node),
  currentImageWillChange: PropTypes.func,
  enableKeyboardInput: PropTypes.bool,
  imageCountSeparator: PropTypes.string,
  isOpen: PropTypes.bool,
  isDraggable: PropTypes.bool,
  onDrop: PropTypes.func,
  onClickImage: PropTypes.func,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showImageCount: PropTypes.bool,
  lightboxWidth: PropTypes.number,
  tileViewportStyle: PropTypes.func,
  thumbnailStyle: PropTypes.func,
  showLightboxThumbnails: PropTypes.bool,
  onClickLightboxThumbnail: PropTypes.func,
  tagStyle: PropTypes.object,
};

Gallery.defaultProps = {
  id: 'ReactGridGallery',
  enableImageSelection: true,
  rowHeight: 180,
  margin: 2,
  enableLightbox: true,
  backdropClosesModal: false,
  currentImage: 0,
  preloadNextImage: true,
  enableKeyboardInput: true,
  imageCountSeparator: ' of ',
  isOpen: false,
  showCloseButton: true,
  showImageCount: true,
  lightboxWidth: 1024,
  showLightboxThumbnails: false,
  onDrop: () => {
  },
};

export default Gallery;
