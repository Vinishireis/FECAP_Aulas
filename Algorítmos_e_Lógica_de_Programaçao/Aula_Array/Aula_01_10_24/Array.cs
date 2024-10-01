using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
	internal class Program
	{
		static void Main(string[] args)
		{
			string[] series = { "Dexter", "Voce", "The Flash", "Resident Evil" };
			Console.WriteLine(series[1]);
			Console.WriteLine(series[0]);
			series[0] = "Game of Thrones";
			Console.WriteLine(series[2]);
			Console.WriteLine(series[3]);
			Console.WriteLine(series.Length);
			Console.WriteLine("\n\n");

			//Matrizes (ou arrays bidimensionais//
			Console.WriteLine("Arrays Bidimensionais");
			Console.WriteLine();
			int[,] numeros =
			{
				{1, 2, 3 },
				{ 4, 5, 6 },
				{ 6, 7, 8 },
				{ 8, 9, 10 },
				{ 9, 10, 11 },
			};
			Console.WriteLine(numeros[2, 0]);
			numeros[2, 0] = 25;
			Console.WriteLine(numeros[2, 0]);
			Console.WriteLine();

			foreach (int numero in numeros)
			{
				Console.WriteLine(numero);


				/* Escreva no console apenas os elementos da array 'números' nos quais a soma dos índices seja ímpar */
				Console.WriteLine("Exercício 01 - Números Impares ");

				for (int i = 1; i < numeros.GetLength(0); i++)
				{
					for (int j = 3; j < numeros.GetLength(1); j++)
					{
						if ((i + j)%2 != 0)
						{
							Console.WriteLine(numeros[i, j]);

						}
					}
				}
			}
	}
}
