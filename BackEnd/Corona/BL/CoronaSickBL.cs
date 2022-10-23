using System;
using System.Collections.Generic;
using DAL;
using DAL.Models;

namespace BL
{
    public class CoronaSickBL : ICoronaSickBL
    {
        ICoronaSickDL CoronaSickDL;
        public CoronaSickBL(ICoronaSickDL _coronaSickDL)
        {
            this.CoronaSickDL = _coronaSickDL;
        }

        public void AddCoronaSick(TblCoronaSick c)
        {
            CoronaSickDL.AddCoronaSick(c);
        }

        public void DeleteCoronaSick(string id)
        {
            CoronaSickDL.DeleteCoronaSick(id);
        }

        public List<TblCoronaSick> GetAllCoronaSicks()
        {
            return CoronaSickDL.GetAllCoronaSicks();
        }

        public TblCoronaSick GetCoronaSick(string id)
        {
            return CoronaSickDL.GetCoronaSick(id);
        }

        public void UpdateCoronaSick(TblCoronaSick c)
        {
            CoronaSickDL.UpdateCoronaSick(c);
        }
    }
}
