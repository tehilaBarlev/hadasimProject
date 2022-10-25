import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

const ImgUpload = ({
    onChange,
    src
}) =>
    <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
            <img for="photo-upload" src={src} />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} />
    </label>

const Profile = ({
    onSubmit,
    src,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            <h4>Profile Card</h4>
            <label className="custom-file-upload fas">
                <div className="img-wrap" >
                    <img for="photo-upload" src={src} />
                </div>
            </label>
            <button div="but" type="submit" className="edit">Edit Profile </button>
        </form>
    </div>


const Edit = ({
    onSubmit,
    children,
}) =>
    <div className="card">
        <form onSubmit={onSubmit}>
            {/* <h4>Profile Card</h4> */}
            {children}
            {/* <button div="but" type="submit" className="save">Save</button> */}
        </form>
    </div>

export default class CardProfile extends React.Component {
    state = {
        file: '',
        imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
        active: 'edit'
    }
    
    photoUpload = e => {
        
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            debugger;
            const val = (reader.result) || '';
            let _client = {...this.props.client };
            _client.img = val;
            this.props.setClient(_client);
        }
        reader.readAsDataURL(file);
    }

    handleSubmit = e => {
        e.preventDefault();
        let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
        this.setState({
            active: activeP,
        })
    }

    render() {
        const { imagePreviewUrl,
            active } = this.state;
        return (
            <div>
                {(active === 'edit') ? (
                    <Edit onSubmit={this.handleSubmit}>
                        <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
                    </Edit>
                ) : (
                        <Profile
                            onSubmit={this.handleSubmit}
                            src={imagePreviewUrl}
                        />)}

            </div>
        )
    }
}

ReactDOM.render(
    <CardProfile />,
    document.getElementById('root')
)