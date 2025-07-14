/* Author: Richard Roy
 */
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>
#include <sys/resource.h>
// Maximum length of input
#define MAX_LEN 100
int main()
{
    // create space for input
    char input[MAX_LEN];
    int running = 1;
    int status;
    // total resource usage
    // cpu time used
    long cpu_time = 0;
    // involuntary context switches
    int context_switches = 0;
    int unknown_count = 0;
    while (running)
    {
        printf("Enter a command: ");
        // basic error checking and input reading
        if (fgets(input, sizeof(input), stdin) == NULL)
        {
            printf("Error reading input\n");
            break;
        }
        // tokenize input on spaces and newlines
        char *tok;
        tok = strtok(input, " \n"); // add newline to end of command
        // add tokens to array of pointers
        // create space for args
        char *args[MAX_LEN];
        int i = 0; // populate args array
        while (tok != NULL)
        { // put token into array
            args[i] = tok;
            i++; // get next token (NULL tells strtok to continue from where it left off)
            tok = strtok(NULL, " \n");
        }
        while (*args != NULL)
        { // printf ("[%s]\n", *args);
            // user inputs quit
            if (strcmp(*args, "quit") == 0)
            {
                printf("Unknown commands: %d\n", unknown_count);
                running = 0;
                break;
            }
            int pid = fork(); // fork failed
            if (pid < 0)
            {
                perror("fork failed");
                exit(1);
            } // is child
            else if (pid == 0)
            {
                if (execvp(args[0], args) < 0)
                {
                    perror("exec failed");
                    exit(1);
                }
            } // is parent
            else
            {
                // resource usage struct
                struct rusage usage;
                // wait for child to finish
                wait(&status);
                // if child failed to execute, increment unknown command count
                if (status != 0)
                {
                    unknown_count++;
                }
                // get resource usage
                getrusage(RUSAGE_CHILDREN, &usage);
                // time is difference between all children and the current child
                //  not quite functioning properly
                if (cpu_time == 0)
                {
                    // first time through
                    cpu_time = usage.ru_utime.tv_sec;
                }
                else
                {
                    // update time
                    cpu_time = usage.ru_utime.tv_sec - cpu_time;
                }
                if (context_switches == 0)
                {
                    // first time through
                    context_switches = usage.ru_nivcsw;
                }
                else
                {
                    // update context switches
                    context_switches = usage.ru_nivcsw - context_switches;
                }
                printf("User CPU time used: %ld.%06d\n", usage.ru_utime.tv_sec, usage.ru_utime.tv_usec);
                printf("Involuntary context switches: %ld\n", usage.ru_nivcsw);
            }
            // reset args array (inefficient, but it works for now)
            int j = 0;
            while (args[j] != NULL)
            {
                args[j] = NULL;
                j++;
            }
        }
    }
}