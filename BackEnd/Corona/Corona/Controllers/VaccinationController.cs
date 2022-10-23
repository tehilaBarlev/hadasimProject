using BL;
using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Corona.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaccinationController : ControllerBase
    {
        IVaccinationBL cb;
        public VaccinationController(IVaccinationBL cb)
        {
            this.cb = cb;
        }

        [HttpGet]
        public ActionResult<List<TblVaccination>> GetAllVaccinations()
        {
            return cb.GetAllVaccinations();
        }
        [HttpGet("GetVaccination")]
        public ActionResult<List<TblVaccination>> GetVaccination(string id)
        {
            return cb.GetVaccination(id);
        }
        [HttpPost]
        public void AddVaccination(TblVaccination newVaccination)
        {
            cb.AddVaccination(newVaccination);
        }
        [HttpPut]
        public void UpdateVaccination(TblVaccination newVaccination)
        {
            cb.UpdateVaccination(newVaccination);
        }
        [HttpDelete]
        public void DeleteVaccination(string id)
        {
            cb.DeleteVaccination(id);
        }
    }
}
