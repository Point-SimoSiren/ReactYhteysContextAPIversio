//import React, { Component } from 'react'
//import { Consumer } from '../../context'
//import uuid from 'uuid'

// TÄÄLLÄ DEMOAN FORMGROUPIN PIILOTUSTA, JOS SE OLISI
// SAMALLA SIVULLA KUIN MUU TAVARA. IMPORTIT JA EXPORTIT KOMMENTOITU POIS
// TÄMÄ TIEDOSTO EI SIIS OLE KÄYTÖSSÄ PROJEKTISSA.
// Tässä olisi samassa addContact ja text input group sisältö.
//error check ja dynaamiset classnamet eli formi bootstraptyylit puuttuu


class AddContact extends Component {

    state = {
        nimi: '',
        email: '',
        puhelin: ''
    }

    state = { showAddForms: false }
    onShowFormsClick = e => {
        this.setState({ showAddForms: !this.state.showAddForms })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault()

        const { nimi, email, puhelin } = this.state

        const newContact = {
            id: uuid(),
            nimi,
            email,
            puhelin
        }
        dispatch({ type: 'ADD_CONTACT', payload: newContact })

        //Tyhjennetään formi tallennus nappia painettaessa
        this.setState({
            nimi: '',
            email: '',
            puhelin: ''
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { showAddForms } = this.state
        const { nimi, email, puhelin } = this.state

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                <h5>Lisää uusi henkilö</h5>
                                <i onClick={this.onShowFormsClick} className="fas fa-sort-down"
                                    style={{ cursor: 'pointer' }} />
                            </div>

                            {showAddForms ? (<div className="card-body">

                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="nimi">Nimi</label>
                                        <input
                                            type="text"
                                            name="nimi"
                                            className="form-control form-control-lg"
                                            placeholder="Anna nimi..."
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control form-control-lg"
                                            placeholder="Anna sähköposti..."
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nimi">Puhelin</label>
                                        <input
                                            type="text"
                                            name="puhelin"
                                            className="form-control form-control-lg"
                                            placeholder="Anna puhelinnumero..."
                                            value={puhelin}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="TALLENNA"
                                        className="btn btn-success btn-block"
                                    />
                                </form>
                            </div>) : null}

                        </div >
                    )
                }}
            </Consumer>
        )

    }
}
//export default AddContact