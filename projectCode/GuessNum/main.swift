//
//  main.swift
//  GuessNum
//
//  Created by Richy Roy on 12/14/23.
//

import Foundation



let number = Int.random(in: 1...100)
var running = true
while running {
    print("Enter a num between 1 and 100")
    let guess = Int(readLine()!)!
    if guess == number {
        print("Correct!")
        running = false
        break
    } else if guess > number {
        print("Too High!")
    } else if guess < number {
        print("Too Low!")
    }
}