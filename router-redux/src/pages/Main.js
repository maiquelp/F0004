import {connect} from 'react-redux';
import * as AuthActions from '../store/actions';

const Main = ({signIn}) => (
  <>
    <h1>Main</h1>
    <button onClick={signIn}>Entrar</button>
  </>
);

export default connect(
  null,
  AuthActions
)(Main);