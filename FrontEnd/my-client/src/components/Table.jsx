import React, { useState, useEffect } from 'react';
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
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Row({ row, setOpenEdit, setClient, setEdit, allCoronaSicks }) {
  const vaccinationService = new VaccinationService();
  const coronaSickService = new CoronaSickService();
  const clientService = new ClientService();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [Vaccinations, setVaccinations] = useState([]);
  const [CoronaSicks, setCoronaSicks] = useState([]);
  const [rowC, setRow] = useState("");
  const [open1, setOpen1] = useState(false);
  const date = new Date(row.birthDate);
  const [addVaccination, SetaddVaccination] = useState({});
  const [addCoronaSick, SetaddCoronaSick] = useState({});

  useEffect(() => {
    vaccinationService.getVaccination(row.id).then(res => setVaccinations(res));
    coronaSickService.getCoronaSick(row.id).then(res => setCoronaSicks(res));
  }, []);
  // useEffect(() => {
  //   vaccinationService.getVaccination(row.id).then(res => setVaccinations(res));
  // }, [Vaccinations]);
  // useEffect(() => {
  //   coronaSickService.getCoronaSick(row.id).then(res => setCoronaSicks(res));
  // }, [CoronaSicks]);

  const handleClickOpen1 = () => {
    setRow(row);
    setOpen1(true);
  };
  const handleClickOpen4 = () => {
    setRow(row);
    setOpen4(true);
  };
  const deleteCoronaSick = () => {
    coronaSickService.deleteCoronaSick(row.id);
    alert('נמחק בהצלחה');
  };
  const deleteVaccination = () => {
    vaccinationService.deleteVaccination(row.id);
    alert('נמחק בהצלחה');
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  const deleteClient = () => {
    handleClose1();
    clientService.deleteClient(rowC.id);
    vaccinationService.deleteVaccination(rowC.id);
    coronaSickService.deleteCoronaSick(rowC.id);
    clientService.getAllClient().then(res => setClient(res));
  };
  const addVacc = () => {
    vaccinationService.addVaccination(addVaccination);
    vaccinationService.getVaccination(row.id).then(res => setVaccinations(res));
    handleClose4();
  }
  const AddCoronaSick = () => {
    coronaSickService.addCoronaSick(addCoronaSick);
    vaccinationService.getVaccination(row.id).then(res => setVaccinations(res));
    handleClose2();
  }
  const OnOpenEditClient = () => {
    setEdit(true);
    setClient(row);
    setOpenEdit();
  }
  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    addVaccination[`${name}`] = val;
    addVaccination.id = row.id;
  }
  const onInputChange2 = (e, name) => {
    const val = (e.target && e.target.value) || '';
    addCoronaSick[`${name}`] = val;
    addCoronaSick.id = row.id;
  }

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th">
          <IconButton size="small" onClick={() => OnOpenEditClient()}><EditIcon /></IconButton>
          <IconButton size="small" onClick={() => handleClickOpen1()}><DeleteIcon /></IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={row.img} />
          </Stack>
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
                  {CoronaSicks.map((vRow) => (
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell><IconButton size="small" onClick={() => deleteCoronaSick()}><DeleteIcon /></IconButton></TableCell>
                      <TableCell component="th" scope="row">{vRow.startDate}</TableCell>
                      <TableCell component="th" scope="row">{vRow.endDate}</TableCell>
                    </TableRow>
                  ))}
                  {(CoronaSicks.length < 1) ? <TableRow><TableCell><IconButton size="small" onClick={handleClickOpen2}><AddIcon /></IconButton></TableCell></TableRow>
                    : <></>
                  }
                </TableBody>
              </Table>
            </Box>
            <Box sx={{ margin: 3 }}>
              <Typography variant="h6" gutterBottom component="div">חיסוני קורונה</Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>תאריך קבלת החיסון</TableCell>
                    <TableCell>יצרן</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Vaccinations.map((vRow) => (
                    <TableRow key={vRow.vaccinationId}>
                      <TableCell></TableCell>
                      <TableCell><IconButton size="small" onClick={() => deleteVaccination()}><DeleteIcon /></IconButton></TableCell>
                      <TableCell component="th" scope="row">{vRow.dateVaccination}</TableCell>
                      <TableCell component="th" scope="row">{vRow.producer}</TableCell>
                    </TableRow>
                  ))
                  }
                  {(Vaccinations.length < 3) ? <TableRow><TableCell><IconButton size="small" onClick={handleClickOpen4}><AddIcon /></IconButton></TableCell></TableRow>
                    : <></>
                  }
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
        onClose={handleClose2}
        aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">עדכון חולה </DialogTitle>
        <DialogContent>
          <TextField error={addCoronaSick.startDate === ""} id="startDate" type="date" label="תחילת מחלה" value={addCoronaSick.startDate} onChange={(e) => onInputChange2(e, 'startDate')} variant="filled" /><br /><br />
          <TextField error={addCoronaSick.endDate === ""} id="endDate" type="date" label="סיום מחלה" value={addCoronaSick.endDate} onChange={(e) => onInputChange2(e, 'endDate')} variant="filled" /><br /><br />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose2}>ביטול</Button>
          <Button onClick={AddCoronaSick}>אישור</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open4}
        onClose={handleClose4}
        aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">הוספת חיסון</DialogTitle>
        <DialogContent>
          <TextField error={addVaccination.producer === ""} id="producer" label="יצרן" onChange={(e) => onInputChange(e, 'producer')} value={addVaccination.producer} variant="filled" /><br /><br />
          <TextField error={addVaccination.dateVaccination === ""} onChange={(e) => onInputChange(e, 'dateVaccination')} id="dateVaccination" type="date" label="תאריך חיסון" value={addVaccination.dateVaccination} variant="filled" /><br /><br />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose4}>ביטול</Button>
          <Button onClick={addVacc}>אישור</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment >
  );

}


export default function TableClients({ data, setOpenEdit, setClient, setEdit }) {
  const coronaSickService = new CoronaSickService();
  const [allCoronaSicks, setAllCoronaSicks] = useState([]);
  useEffect(() => {
    coronaSickService.getAllCoronaSick().then((res) => { setAllCoronaSicks(res) })
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
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
              <Row key={row.id} row={row} setOpenEdit={setOpenEdit} setClient={setClient} setEdit={setEdit} allCoronaSicks={allCoronaSicks} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}
