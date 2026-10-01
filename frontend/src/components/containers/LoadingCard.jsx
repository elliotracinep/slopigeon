import { RotatingLines } from "react-loader-spinner";

function Loader() {
    return (
        <RotatingLines
            strokeColor="#f8f8f8"
            strokeWidth={5}
            animationDuration={1}
            width={96}
            visible={true} />

    )
}
export default Loader;