using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL
{
    public class VaccinationDL : IVaccinationDL
    {
        CoronaContext db;
        public VaccinationDL(CoronaContext _db)
        {
            this.db = _db;
        }
        public void AddVaccination(TblVaccination c)
        {
            db.Add(c);
            db.SaveChanges();
        }

        public void DeleteVaccination(string id)
        {
            db.Remove(db.TblVaccinations.FirstOrDefault(x => x.Id == id));
            db.SaveChanges();
        }

        public List<TblVaccination> GetAllVaccinations()
        {
            return db.TblVaccinations.ToList();
        }

        public List<TblVaccination> GetVaccination(string id)
        {
            return db.TblVaccinations.Where(x => x.Id == id).ToList();
        }

        public void UpdateVaccination(TblVaccination c)
        {
            TblVaccination newVaccination = db.TblVaccinations.FirstOrDefault(x => x.Id == c.Id);
            if(newVaccination != null)
            {
                newVaccination.DateVaccination = c.DateVaccination;
                newVaccination.Producer = c.Producer;
                db.SaveChanges();
            }
        }
    }
}
