using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface ICoronaSickDL
    {
        List<TblCoronaSick> GetAllCoronaSicks();
        List<TblCoronaSick> GetCoronaSick(string id);
        void AddCoronaSick(TblCoronaSick c);
        void DeleteCoronaSick(string id);
        void UpdateCoronaSick(TblCoronaSick c);
    }
}
