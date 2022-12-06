import React, { useRef } from "react";

const AddToturial = (props) => {
    const nameRef = useRef();
    const priceRef = useRef();

    const descRef = useRef();
    const imageRef = useRef();

    const createtoturial = (event) => {
        event.preventDefault();
        const toturial = {
            name: nameRef.current.value,
            price:parseInt( priceRef.current.value),

            desc: descRef.current.value,
            Image: imageRef.current.value,
        }

        props.addtoturial(toturial);
        event.currentTarget.reset();

    }

    return (

        <form onSubmit={createtoturial} >
            <div >
                <input type="text" ref={nameRef} name="name" placeholder="name" />
                <input type="number" ref={priceRef} name="price" placeholder="price" />

            </div>
            <textarea className="form-control" ref={descRef} name="desc" placeholder="desc"></textarea>
            <input type="text" ref={imageRef} name="image" placeholder="image" />
            <button className="btn btn-outline-secondary">AddToturial</button>

        </form>



    )
}
export default AddToturial;