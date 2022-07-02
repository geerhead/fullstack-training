using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectClass
{
    class Program
    {
        static void Main(string[] args)
        {
            string s1 = "Hello";
            string s2 = "Hello";

            Console.WriteLine(s1 == s2);
            Console.WriteLine(s1.Equals(s2));

            var car1 = new Car() {Id = 1};
            var car2 = new Car() {Id = 2};

            Console.WriteLine(car1 == car2);
            Console.WriteLine(car1.Equals(car2));
        }
    }

    public class Car
    {
        public int Id { get; set; }
    }
}
