using BL;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Corona.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoronaSickController : ControllerBase
    {

        ICoronaSickBL cb;
            public CoronaSickController(ICoronaSickBL cb)
            {
                this.cb = cb;
            }
            // GET: api/clients
            [HttpGet]
            public ActionResult<List<TblCoronaSick>> GetAllClients()
            {
                return cb.GetAllCoronaSicks();
            }
            [HttpGet("GetCoronaSick")]
            public ActionResult<TblCoronaSick> GetCoronaSick(string id)
            {
                return cb.GetCoronaSick(id);
            }
            [HttpPost]
            public void AddCoronaSick(TblCoronaSick newCoronaSick)
            {
                cb.AddCoronaSick(newCoronaSick);
            }
            [HttpPut]
            public void UpdateCoronaSick(TblCoronaSick newCoronaSick)
            {
                cb.UpdateCoronaSick(newCoronaSick);
            }
            [HttpDelete]
            public void DeleteCoronaSick(string id)
            {
                cb.DeleteCoronaSick(id);
            }
        
    }
}
