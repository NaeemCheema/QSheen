import { connect } from 'react-redux';
import WebView from './webview';

const mapStateToProps = ({ checkoutData }) => ({
    checkoutData,
});

export default connect(mapStateToProps)(WebView);
