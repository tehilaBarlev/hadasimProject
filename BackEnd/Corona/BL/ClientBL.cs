using System;
using System.Collections.Generic;
using DAL;
using DAL.Models;

namespace BL
{
    public class ClientBL : IClientBL
    {
        IClientDL clientDL;
        public ClientBL (IClientDL _clientDL)
        {
            this.clientDL = _clientDL;
        }

        public void AddClient(TblClient c)
        {
            clientDL.AddClient(c);
        }

        public void DeleteClient(string id)
        {
            clientDL.DeleteClient(id);
        }

        public List<TblClient> GetAllClients()
        {
            return clientDL.GetAllClients();
        }

        public TblClient GetClient(string id)
        {
            return clientDL.GetClient(id);
        }

        public void UpdateClient(TblClient c)
        {
            clientDL.UpdateClient(c);
        }
    }
}
