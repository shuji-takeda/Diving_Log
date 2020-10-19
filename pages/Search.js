import Search_Form from '../Component/Search/Search_Form';
import Layout from '../Component/Layout/Layout';
import MapApi from '../Component/Search/MapApi'
import Search_result from '../Component/Search/Search_result';

export default () =>{
    return(
    <div>
        <Layout header="Sharing  Divers  log">
             <Search_Form />
             {/* <Search_result /> */}
        </Layout>
    </div>
    )
}