import React, { useState, useEffect } from 'react';
import VaccinationService from '../services/VaccinationService';
import ClientService from '../services/ClientService';

export default function ChartCorona() {
  const clientService = new ClientService();
  const vaccinationService = new VaccinationService();

  const [clients, setClients] = useState([]);
  let yes = 0;
  let no = 0;

  useEffect(() => {
    clientService.getAllClient().then(res => setClients(res));
    debugger;
    clients.map(client => {  
      vaccinationService.getVaccination(client.id).then(res => {
        res ? yes++ : no++;
      })
    });
  },[]);
  return (
    <>
      <h4>מספר חברי הקופה המחוסנים:</h4>
      <h4>{yes}</h4>
      <h4>מספר חברי הקופה שאינם מחוסנים:</h4>
      <h4>{no}</h4>
    </>
  );
}