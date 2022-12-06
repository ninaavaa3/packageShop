import React from 'react';

const EditToturialForm = (props) => {
    // handleChange = (e) => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.value);
    // console.log(e.currentTarget.name);

    //  const updatedForm = { ...this.props.toturial };
    //   updatedForm[e.currentTarget.name] = e.currentTarget.value;
    //  this.props.updatedForm(this.props.index, updatedForm);
    // console.log(updatedForm);
    //  }

    const delet = (e) => {
        e.preventDefault();

        props.deleteToturial(props.toturial.id);
    }

    return (
        <form className="add-toturial-form" onSubmit={delet} >

            <input name="name" type="text" placeholder="name" defaultValue={props.toturial.name} />
            <input name="price" type="text" placeholder="price" defaultValue={props.toturial.price} />

            <textarea className="form-control" name="desc" placeholder="desc" defaultValue={props.toturial.desc}></textarea>

            <button className="btn btn-outline-secondary">Remove Toturial</button>
        </form>
    )

}
export default EditToturialForm;