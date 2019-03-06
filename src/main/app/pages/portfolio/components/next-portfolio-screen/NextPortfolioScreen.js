import React from 'react';
import {string} from 'prop-types';
import './next-portfolio-screen.scss';
import {withRouter} from 'react-router-dom'
import classNames from 'classnames';

export class NextPortfolioScreenComponent extends React.Component {

  static propTypes = {
    nextPageHref: string
  };

  state = {
    fixed: false
  };

  handleScroll = event => {
    if (this.state.fixed) {
      window.scrollTo(0, 0);
    }
    if ((window.scrollY + window.innerHeight) === document.documentElement.offsetHeight) {
      this.setState({fixed: true});
      window.scrollTo(0, 0);
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.props.history.push(this.props.nextPageHref);
      }, 10);
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {fixed} = this.state;
    return (
      <div className={classNames('next-portfolio-screen', {'next-portfolio-screen__fixed': fixed})}>
        <h2 className="next-portfolio-screen__label">Следующая работа</h2>
      </div>
    );
  }

}

export const NextPortfolioScreen = withRouter(NextPortfolioScreenComponent);
