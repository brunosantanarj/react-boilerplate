import * as React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../store/store';
import { indexOperations, indexSelectors } from '../store/index';
import Head from '../components/Head/Head';

export interface Props {
  children: any;
  name: string;
  update: (update: Object) => null;
}

class GlobalLayout extends React.Component<Props> {

  handleInput = ({ target }) => this.props.update({ name: target.value });

  render = () => {
    const { children, ...props } = this.props;

    return (
      <React.Fragment>
        <Head />
        <header>HEADER</header>
        <main>{React.cloneElement(children, { ...props })}</main>
        <input
          onChange={this.handleInput}
          value={this.props.name || ''}
        />
        <p>{this.props.name || 'não tem'}</p>
        <footer>FOOTER</footer>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  update: indexOperations.update
};

const mapStateToProps = (state) => ({
  name: indexSelectors.getName(state)
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(GlobalLayout);
