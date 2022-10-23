using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using DAL.Models;

namespace BL
{
    public interface IClientBL
    {
        List<TblClient> GetAllClients();
        TblClient GetClient(string id);
        void AddClient(TblClient c);
        void DeleteClient(string id);
        void UpdateClient(TblClient c);
    }
}
