using System;
using System.Collections.Generic;
using System.Text;
using DAL;
using DAL.Models;

namespace BL
{
    public interface ICoronaSickBL
    {
        List<TblCoronaSick> GetAllCoronaSicks();
        TblCoronaSick GetCoronaSick(string id);
        void AddCoronaSick(TblCoronaSick c);
        void DeleteCoronaSick(string id);
        void UpdateCoronaSick(TblCoronaSick c);
    }
}
