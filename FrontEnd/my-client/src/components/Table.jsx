import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import VaccinationService from '../services/VaccinationService';
import CoronaSickService from '../services/CoronaSickService';
import ClientService from '../services/ClientService';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Row({ row, setOpenEdit, setClient, setEdit }) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [Vaccinations, setVaccinations] = useState([]);
  const [CoronaSicks, setCoronaSicks] = useState([]);
  const [rowC, setRow] = useState("");
  const vaccinationService = new VaccinationService();
  const coronaSickService = new CoronaSickService();
  const clientService = new ClientService();
  const [open1, setOpen1] = useState(false);

  let coronaSickEmpty = {
    id: "",
    startDate: new Date(),
    endDate: new Date(),
  }

  const [coronaSick, setCoronaSick] = useState(coronaSickEmpty);
  const [dis1, setDis1] = useState(false);
  const date = new Date(row.birthDate);
  

  useEffect(() => {
      vaccinationService.getVaccination(row.id).then(res => setVaccinations(res));
      coronaSickService.getCoronaSick(row.id).then(res => {
      setCoronaSicks(res);
    });
    console.log('Vaccinations');
    console.log(row.id);
  }, []);

  const handleClickOpen1 = (row) => {
    setRow(row);
    setOpen1(true);
  };
  const deleteCoronaSick = (row) => {
    coronaSickService.deleteCoronaSick(row.id);
    alert('נמחק בהצלחה');
  };
  const addCoronaSick = () => {
    handleClose();
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const deleteClient = () => {
    handleClose1();
    clientService.deleteClient(rowC.id);
    clientService.getAllClient().then(res => setClient(res));
  };

  const OnOpenEditClient = () => {
    setEdit(true);
    setClient(row);
    setOpenEdit();
  }
  const OnOpenAddCoronaSick = () => {
  }
  // useEffect(() => {
  //   clientService.getAllClient().then(res => setClient(res));
  // }, []);
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _coronaSick = { ...coronaSick };
    _coronaSick[`${name}`] = val;
    setCoronaSick(_coronaSick);
  }
  const AddCoronaSick = async () => {
    handleClickOpen();
    setDis1(false);
    await coronaSickService.getCoronaSick(coronaSick.id).then(res => {
      if (res === "") {
        coronaSickService.addCoronaSick(coronaSick);
        coronaSickService.getAllCoronaSick().then(res => setCoronaSicks(res));
        setCoronaSick(coronaSickEmpty);
        handleClose();
        alert("נוסף חולה חדש :)");
      }
      else {
        alert("ID קיים");
        setDis1(true);
      }
    });
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen2(false);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th">
          <IconButton size="small" onClick={() => OnOpenEditClient(row)}><EditIcon /></IconButton>
          <IconButton size="small" onClick={() => handleClickOpen1(row)}><DeleteIcon /></IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.id}</TableCell>
        <TableCell component="th" scope="row">{row.firstName}</TableCell>
        <TableCell component="th" scope="row">{row.lastName}</TableCell>
        <TableCell component="th" scope="row">{row.country}</TableCell>
        <TableCell component="th" scope="row">{row.street}</TableCell>
        <TableCell component="th" scope="row">{row.numberHouse}</TableCell>
        <TableCell component="th" scope="row">{date.toDateString()}</TableCell>
        <TableCell component="th" scope="row">{row.phoneNumber}</TableCell>
        <TableCell component="th" scope="row">{row.mobilephoneNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 3 }}>
              <Typography variant="h6" gutterBottom component="div">הסטוריה קורונה</Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>תחילת מחלה</TableCell>
                    <TableCell>סיום מחלה</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell component="th" scope="row">{coronaSick.id !=="" ? coronaSick.startDate.toDateString() : "-"}</TableCell>
                    <TableCell component="th" scope="row">{coronaSick.id !=="" ?  coronaSick.endDate.toDateString() : "-"}</TableCell>
                    {coronaSick.id !==""  ? <IconButton size="small" onClick={() => deleteCoronaSick(coronaSick)}><DeleteIcon /></IconButton>
                      : <IconButton size="small" onClick={handleClickOpen2}><AddIcon /></IconButton>}
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Box sx={{ margin: 3 }}>
              <Typography variant="h6" gutterBottom component="div">חיסוני קורונה</Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>תאריך קבלת החיסון</TableCell>
                    <TableCell>יצרן</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Vaccinations.map((vRow) => (
                    <TableRow key={vRow.vaccinationId}>
                      <TableCell component="th" scope="row">{vRow.dateVaccination}</TableCell>
                      <TableCell component="th" scope="row">{vRow.producer}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Dialog open={open1}
        onClose={handleClose1}
        aria-labelledby="draggable-dialog-title">
        <DialogContent>
          <Typography>האם הנך בטוח רוצה למחוק ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose1}>ביטול</Button>
          <Button onClick={deleteClient}>אישור</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open2}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">עדכון חולה </DialogTitle>
        <DialogContent>
          <form>
            <br />
            <TextField error={coronaSick.id === "" || coronaSick.id.length != 9}
              id="id" label="ת.ז" value={coronaSick.id} onChange={(e) => onInputChange(e, 'id')} variant="filled" />
            {dis1 ? (<><div>הת.ז קיימת</div></>) : ''}<br /><br />
            <TextField error={coronaSick.startDate === ""} id="startDate" type="date" label="תחילת מחלה" value={coronaSick.startDate} onChange={(e) => onInputChange(e, 'startDate')} variant="filled" /><br /><br />
            <TextField error={coronaSick.endDate === ""} id="endDate" type="date" label="סיום מחלה" value={coronaSick.endDate} onChange={(e) => onInputChange(e, 'endDate')} variant="filled" /><br /><br />
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>ביטול</Button>
          <Button onClick={AddCoronaSick}>אישור</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


export default function TableClients({ data, setOpenEdit, setClient, setEdit }) {

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell>תעודת זהות</TableCell>
              <TableCell >שם פרטי</TableCell>
              <TableCell >שם משפחה</TableCell>
              <TableCell >עיר</TableCell>
              <TableCell >רחוב</TableCell>
              <TableCell >מספר בית</TableCell>
              <TableCell >תאריך לידה</TableCell>
              <TableCell >טלפון</TableCell>
              <TableCell >טלפון נייד</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <Row key={row.id} row={row} setOpenEdit={setOpenEdit} setClient={setClient} setEdit={setEdit} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}
