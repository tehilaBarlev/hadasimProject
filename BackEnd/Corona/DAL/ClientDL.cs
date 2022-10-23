using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL
{
    public class ClientDL : IClientDL
    {
        CoronaContext db;
        public ClientDL(CoronaContext _db)
        {
            this.db = _db;
        }
        public void AddClient(TblClient c)
        {
            db.Add(c);
            db.SaveChanges();
        }

        public void DeleteClient(string id)
        {
            TblClient deleteClient = db.TblClients.FirstOrDefault(x => x.Id == id);
            if(deleteClient != null)
            {
                db.Remove(deleteClient);
                db.SaveChanges();
            }

        }

        public List<TblClient> GetAllClients()
        {
            return db.TblClients.ToList();
        }

        public TblClient GetClient(string id)
        {
            return db.TblClients.FirstOrDefault(x => x.Id == id);
        }

        public void UpdateClient(TblClient c)
        {
            TblClient newclient = db.TblClients.FirstOrDefault(x => x.Id == c.Id);
            if(newclient != null)
            {
                newclient.FirstName = c.FirstName;
                newclient.LastName = c.LastName;
                newclient.Country = c.Country;
                newclient.Street = c.Street;
                newclient.NumberHouse = c.NumberHouse;
                newclient.BirthDate = c.BirthDate;
                newclient.PhoneNumber = c.PhoneNumber;
                newclient.MobilephoneNumber = c.MobilephoneNumber;
                db.SaveChanges();
            }
        }
    }
}
