import { connect } from 'react-redux';
import Brands from './brands';
import { fetchBrandsActionsCreator as brandsActions } from '../../redux/actions/brands.actions';


const mapStateToProps = ({ brandsData, homeData }) => ({
    brandsData,
    homeData
});

export default connect(mapStateToProps, {...brandsActions})(Brands);
