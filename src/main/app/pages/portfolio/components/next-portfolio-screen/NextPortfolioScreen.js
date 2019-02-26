import React from 'react';
import {string} from 'prop-types';
import './next-portfolio-screen.scss';
import { withRouter } from 'react-router-dom'
import {PortfolioTitle} from '../portfolio-title/PortfolioTitle';

export class NextPortfolioScreenComponent extends React.Component {

  static propTypes = {
    nextPageHref: string
  };

  handleScroll = event => {
    if ((document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight) {
      this.props.history.push(this.props.nextPageHref);
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {nextPageHref} = this.props;
    return (
      <div className="next-portfolio-screen">
        <PortfolioTitle>Следующая работа</PortfolioTitle>
      </div>
    );
  }

}

export const NextPortfolioScreen = withRouter(NextPortfolioScreenComponent);
