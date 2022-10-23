using System;
using System.Collections.Generic;
using DAL;
using DAL.Models;

namespace BL
{
    public class VaccinationBL : IVaccinationBL
    {
        IVaccinationDL VaccinationDL;
        public VaccinationBL(IVaccinationDL _VaccinationDL)
        {
            this.VaccinationDL = _VaccinationDL;
        }

        public void AddVaccination(TblVaccination c)
        {
            VaccinationDL.AddVaccination(c);
        }

        public void DeleteVaccination(string id)
        {
            VaccinationDL.DeleteVaccination(id);
        }

        public List<TblVaccination> GetAllVaccinations()
        {
            return VaccinationDL.GetAllVaccinations();
        }

        public List<TblVaccination> GetVaccination(string id)
        {
            return VaccinationDL.GetVaccination(id);
        }

        public void UpdateVaccination(TblVaccination c)
        {
            VaccinationDL.UpdateVaccination(c);
        }
    }
}
