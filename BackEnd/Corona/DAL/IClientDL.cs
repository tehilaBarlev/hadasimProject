using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IClientDL
    {
        List<TblClient> GetAllClients();
        TblClient GetClient(string id);
        void AddClient(TblClient c);
        void DeleteClient(string id);
        void UpdateClient(TblClient c);
    }
}
