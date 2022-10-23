using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using DAL.Models;

namespace BL
{
    public interface IVaccinationBL
    {
        List<TblVaccination> GetAllVaccinations();
        List<TblVaccination> GetVaccination(string id);
        void AddVaccination(TblVaccination c);
        void DeleteVaccination(string id);
        void UpdateVaccination(TblVaccination c);
    }
}
