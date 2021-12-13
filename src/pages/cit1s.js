import ProductPage from "../components/ProductPage";
import Sitemap from "../sitemap";

export default function Cit1s() {
    if (!Sitemap.PRODUCTS['cit1s']) {
        return <></>
    }

    return (
        <ProductPage id={'cit1s'} />
    )
}
