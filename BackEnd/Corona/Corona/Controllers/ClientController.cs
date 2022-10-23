using BL;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Corona.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        IClientBL cb;
        public ClientController(IClientBL cb)
        {
            this.cb = cb;
        }
        // GET: api/clients
        [HttpGet]
        public ActionResult<List<TblClient>> GetAllClients()
        {
            return cb.GetAllClients();
        }
        [HttpGet("GetClient")]
        public ActionResult<TblClient> GetClient(string id)
        {
            return cb.GetClient(id);
        }
        [HttpPost]
        public void AddClient(TblClient newClient)
        {
            cb.AddClient(newClient);
        }
        [HttpPut]
        public void UpdateClient(TblClient newClient)
        {
            cb.UpdateClient(newClient);
        }
        [HttpDelete]
        public void DeleteClient(string id)
        {
            cb.DeleteClient(id);
        }
    }
}
