import React, { useState, useEffect } from 'react';
import TableClients from './Table'
import ClientService from '../services/ClientService';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import CardProfile from './Avatar'
function Clients() {
    const [open, setOpen] = useState(false);
    const [dis1, setDis1] = useState(false);
    const [clients, setClients] = useState([]);
    const clientService = new ClientService();
    const clientEmpty = {
        id: "",
        firstName: "",
        lastName: "",
        country: "",
        street: "",
        numberHouse: "",
        birthDate: new Date(),
        phoneNumber: "",
        mobilephoneNumber: "",
        img:""
    }

    const [client, setClient] = useState(clientEmpty);
    const [deleteC, setDeleteC] = useState("");
    const [edit, setEdit] = useState(false);

    const addClient = async () => {
        if (edit) {
            await clientService.updateClient(client);
            clientService.getAllClient().then(res => setClients(res));
            alert("עודכן בהצלחה");
            setEdit(false);
            handleClose();
            setClient(clientEmpty);
        }
        else {
            setDis1(false);
            await clientService.getClient(client.id).then(res => {
                if (res === "") {
                    clientService.addClient(client);
                    clientService.getAllClient().then(res => setClients(res));
                    setClient(clientEmpty);
                    handleClose();
                    alert("נוסף חבר חדש :)");
                }
                else {
                    alert("ID קיים");
                    setDis1(true);
                }
            });
        }
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        clientService.getAllClient().then(res => setClients(res));
        console.log(clients);
    }, []);
    // useEffect(() => {
    //     clientService.getAllClient().then(res => setClients(res));
    //     console.log(clients);
    // }, [clients]);

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _client = { ...client };
        _client[`${name}`] = val;
        setClient(_client);
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>להוספת חבר<AddIcon /></Button>
            <br></br><br></br>
            <TableClients data={clients} setOpenEdit={handleClickOpen} setClient={setClient} setEdit={setEdit} />
            <Dialog open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title">
                {edit ? <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">עדכון חבר
            </DialogTitle> :
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">הוספת חבר</DialogTitle>}
                <DialogContent>
                    <form> 
                        <CardProfile setClient={setClient} client={client}/><br/><br />
                        <TextField error={client.id === "" || client.id.length != 9}
                            id="id" label="ת.ז" value={client.id} onChange={(e) => onInputChange(e, 'id')} variant="filled" />
                        {dis1 ? (<><div>הת.ז קיימת</div></>) : ''}<br /><br />
                        <TextField error={client.firstName === ""} id="firstName" label="שם פרטי" value={client.firstName} onChange={(e) => onInputChange(e, 'firstName')} variant="filled" /><br /><br />
                        <TextField error={client.firstName === ""} id="lastName" label="שם משפחה" value={client.lastName} onChange={(e) => onInputChange(e, 'lastName')} variant="filled" /><br /><br />
                        <TextField id="country" label="עיר" value={client.country} onChange={(e) => onInputChange(e, 'country')} variant="filled" /><br /><br />
                        <TextField id="street" label="רחוב" value={client.street} onChange={(e) => onInputChange(e, 'street')} variant="filled" /><br /><br />
                        <TextField id="numberHouse" label="מספר בית" value={client.numberHouse} onChange={(e) => onInputChange(e, 'numberHouse')} variant="filled" /><br /><br />
                        <TextField error={client.birthDate === ""} id="birthDate" type="date" label="תאריך לידה" value={client.birthDate} onChange={(e) => onInputChange(e, 'birthDate')} variant="filled" /><br /><br />
                        <TextField id="phoneNumber" label="טלפון" value={client.phoneNumber} onChange={(e) => onInputChange(e, 'phoneNumber')} variant="filled" /><br /><br />
                        <TextField error={client.mobilephoneNumber === ""} id="mobilephoneNumber" label="טלפון נייד" value={client.mobilephoneNumber} onChange={(e) => onInputChange(e, 'mobilephoneNumber')} variant="filled" /><br /><br />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>ביטול</Button>
                    <Button onClick={addClient}>אישור</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Clients;











