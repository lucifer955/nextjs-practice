import {useRouter} from 'next/router';

const ProductDetails = () => {

    const router = useRouter();
    const productId = router.query.productId;
    return (
        <h1>{productId} Product Page</h1>
    )
};

export default ProductDetails;