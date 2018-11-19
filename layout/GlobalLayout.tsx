import * as React from 'react';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import VerifyViewPortAction from '../store/actions/FirstRenderAction';
import initStore from '../store/store';
import Head from '../components/Head/Head';

export interface Props {
  children: any;
}

class GlobalLayout extends React.Component<Props> {
  render = () => (
    <React.Fragment>
      <Head />
      <header>HEADER</header>
      <main>{React.cloneElement(this.props.children, { store: this.props })}</main>
      <footer>FOOTER</footer>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ VerifyViewPortAction }, dispatch);
const mapStateToProps = (state) => ({
  teste: state.firstRenderReducer
});

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(GlobalLayout);
