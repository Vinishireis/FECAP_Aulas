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
                        if ((i + 
                        j) % 2 != 0)
                        {
                            Console.WriteLine(numeros[i, j]);

                        }
                    }
                }

                //Solicite um número n ao usuário e calcule//
                //A soma de todos os números inteiros//
                Console.WriteLine() ;
                Console.WriteLine("Exercício 02");
                Console.WriteLine("Digite um número")

                    int n = int.Parse(Console.ReadLine())
                    int soma = 0;
                for (int i = 1; i <= n; i++)
                {
                    soma += i;
                }

                Console.WriteLine("A soma de todos os números inteiros de 1 até " + n + " é:" + soma); 
                //-------------------------------------------------------------------------------------//

                //Peça ao usuário um número e calcule o fatorial desse número//
                Console.WriteLine();
                Console.WriteLine("Exercício 03");
                Console.Write("Digite um número")
                int fatorial = 1;
                for (int i = 1; i <= n; i++)
                {
                    fatorial = fatorial * 1;
                }
                Console.WriteLine($"O fatorial de {n} é: {fatorial}");
                //--------------------------------------------------------------------------------------//

                //Solicite dois números inteiros e conte
                //quanros números pares existem no intervalo entre eles (inclusive)
                Console.WriteLine();
                Console.WriteLine("Exercício 04");
                  // Solicita os dois números inteiros ao usuário
                Console.Write("Digite o primeiro número inteiro: ");
                int num1 = int.Parse(Console.ReadLine());

                Console.Write("Digite o segundo número inteiro: ");
                int num2 = int.Parse(Console.ReadLine());

                // Inicializa a contagem de números pares
                int count = 0;

                // Define o intervalo entre os dois números
                int inicio = Math.Min(num1, num2);  // garante que inicio seja o menor número
                int fim = Math.Max(num1, num2);     // garante que fim seja o maior número

                // Conta os números pares no intervalo
                for (int i = inicio; i <= fim; i++)
                {
                if (i % 2 == 0)
                {
                count++;
                }
                }

                // Exibe o resultado
                Console.WriteLine("Existem " + count + " números pares no intervalo entre " + num1 + " e " + num2);
                }
            }
        }
    }
