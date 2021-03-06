import React, { Component } from 'react';
import imagesApi from '../api/imagesApi';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Layout from './Layout';
import Modal from './Modal';
import LoadMoreButton from './LoadMoreButton';
import Loader from 'react-loader-spinner';
import '../styles.css';

class App extends Component {
  state = {
    articles: [],
    loading: false,
    searchQuery: '',
    page: 1,
    showModal: false,
    largeUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  toggleModal = largeUrl => {
    this.setState(state => ({ showModal: !state.showModal, largeUrl }));
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imagesApi
      .fetchImages(searchQuery, page)
      .then(articles =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      articles: [],
    });
  };

  render() {
    const { articles, showModal, loading } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {articles.length > 0 && (
          <ImageGallery images={articles} openModal={this.toggleModal} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} largeUrl={this.state.largeUrl} />
        )}
        {loading && (
          <Loader
            className="Loader"
            type="ThreeDots"
            color="#3f51b5"
            margin-left={100}
            height={80}
            width={80}
            timeout={3000} //3 secs
          />
        )}

        {articles.length > 0 && !loading && (
          <LoadMoreButton loadMore={this.fetchImages} />
        )}
      </Layout>
    );
  }
}

export default App;
