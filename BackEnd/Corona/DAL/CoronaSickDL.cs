using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL
{
    public class CoronaSickDL : ICoronaSickDL
    {
        CoronaContext db;
        public CoronaSickDL(CoronaContext _db)
        {
            this.db = _db;
        }

        public void AddCoronaSick(TblCoronaSick c)
        {
            db.Add(c);
            db.SaveChanges();
        }

        public void DeleteCoronaSick(string id)
        {
            db.Remove(db.TblCoronaSicks.FirstOrDefault(x => x.Id == id));
            db.SaveChanges();
        }

        public List<TblCoronaSick> GetAllCoronaSicks()
        {
            return db.TblCoronaSicks.ToList();
        }

        public List<TblCoronaSick> GetCoronaSick(string id)
        {
            return db.TblCoronaSicks.Where(x => x.Id == id).ToList();
        }

        public void UpdateCoronaSick(TblCoronaSick c)
        {
            TblCoronaSick newclient = db.TblCoronaSicks.FirstOrDefault(x => x.Id == c.Id);
            if (newclient != null)
            {
                newclient.StartDate = c.StartDate;
                newclient.EndDate = c.EndDate; 
                db.SaveChanges();
            }
        }
    }
}
