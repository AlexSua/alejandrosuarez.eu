---
title: 'Useful Linux commands and Utilities'
description: 'A compilation of useful Linux commands and utilities. This compilation will grow and be upgraded with time.'
date: '2022-07-21'
language: 'en'
tags: ['Linux']
image: "/assets/img/blog/linux-commands-and-utilities.jpg"
published: false
---


# Useful Linux commands and Utilities
The following article shows a list of Linux Bash commands and utilities good to know if you are working on a Linux environment.


## Bash commands

### Xargs | Using the output of the last command as arguments of another command

[Xargs](https://man7.org/linux/man-pages/man1/xargs.1.html) is a command that allows you to pass the standard input into arguments of another command. This is extremely useful when you want, by piping, to feed a command that doesn't support standard input with the result of another command. 
An example of this is the command `rm`, which only uses arguments as input mechanism. 

Below you can see an example using `xargs` together with `rm` to remove all files and directories that start with .git from the current folder.

```bash
find . -name ".git*"  | xargs rm -rf
```
Assuming we have the following files/directories in our current folder:
```
.git/
.github/
.gitignore
```

Last command translates into something like the following:
```bash
rm -rf "./.git" "./.github" "./.gitignore"
```

As you can see, `xargs` transforms the result of find into arguments for `rm -rf`.



### Grep | Search for a string within all files in a directory and its subfolders


[Grep](https://man7.org/linux/man-pages/man1/grep.1.html) is a command that allows you to search for a specific pattern given an input, which could be a file or text piped from the result of another command.

Below you can see the use of `grep` to search for a specific pattern inside files of a folder and its subfolders. This use of grep turns out to be incredibly useful if you are a system administrator; you are able, with one command, to search quickly inside the source code of specific software for an error message giving you the opportunity to identify the problematic code and solve the issue without the need of totally know in its full the architecture of the software you are maintaining.

```bash
grep -rno "pattern_to_search" ./folder

```
- **-r** : Search recursively inside files of a directory and its subdirectories.
- **-n** : Print the line number where the match occurs inside the file.
- **-o** : Instead of printing the entire matching line, it prints only the matching part.


The next command allows you to print only the path of all files that contain a specific **word pattern**.
```bash
grep -rwl "pattern_to_search" ./folder

```
- **-w** : Search for a "word" that matches the pattern. `grep -w` considers as a "word" that text fragment separated by symbols that can not constitute a word, such as spaces, line breaks...
- **-l** : Only shows the path of the files that contain the specific pattern.

You can combine the arguments of the commands above to adapt to a particular need.


### Find | Find files that match multiple names
[Find](https://man7.org/linux/man-pages/man1/find.1.html) allows you to search for files inside a directory structure. 

The following command allows you to search for all files that have the `.html`, `.js` or `.css` extension inside a folder hierarchy.

```bash
find "./folder" -type f -name "*.html" -o -name "*.js" -o -name "*.css"

```
- **-type** : Indicates the type of the element to search. `f` is for a regular file whilst `d` is for a directory. More information of find types can be found here: ```man -P 'less +/[\ ]{3}-type' find```{lang="bash"}
- **-name** : Search for files that match a particular shell pattern. Shell patterns can contain metacharacters such as `*` which matches zero or more characters in a string.
- **-o** : Or operator. Allows you to concatenate several -name arguments using the `or` operator. Find has more operators: `-a` for **and**, `!` to **negate** and get files that do not match... For more information, you can introduce ```man -P 'less +/[\ ]{3}OPERATORS' find```{lang="bash"} to get information about other operators you can use with find.


### Pgrep | Get the PID of a process by its name
With pgrep you can obtain the PID of processes whose name matches the indicated regular expression. Pgrep also has arguments that allow you to search for other process parameters such as user, group, state...

The following command allows you to search for a process that contains **"spotify"** or **"code"** inside its name.

```bash
pgrep "spotify|code"
```

You can craft [here](https://regexr.com/) your regular expressions to solve your specific use case.

This command is useful to use its result as input of another command using, for example, command substitution:

```bash
ps -p $(pgrep "spotify|code")
```
The command above uses the output of the enclosed `pgrep` and inserts it as arguments into `ps -p`.

> Command substitution


### Pkill | Kill a process by its name
Pkill share the same arguments as pgrep with the difference that instead of only printing the PID of processes it kills the processes that match the regular expression.

```bash
pkill "spotify|code"
```


### Pkill | Kill all processes of a user
You can use the argument `-u` of `pkill` to select processes that belong to a particular user.
```bash
pkill -u "username"
```

### Grep | Sed | Replace the content of files from a specific folder and its subfolders
Sed (**S**tream **ed**itor) is a command that allows you to transform text that comes from a file or input. It works by replacing a specific match of a regular expression with the desired text.

The following command uses grep, as described [here](#grep--search-for-a-string-within-all-files-in-a-directory-and-its-subfolders), together with sed to replace text inside all files that contain text that matches a regular expression.

```bash
 grep -rl "regex" ./folder | xargs sed -i 's$text$replacement$g' 

```
1. **grep -rl** : Get the list of files that matches "regex" inside the **"./folder"** hierarchy.
2. **|** : Pipes the result of `grep` into `xargs`.
3. **xargs** : Transform the standard input received by piping into arguments to the next command.
4. ```sed -i "s$text$replacement$g" "file1" "file2" ...```{lang="bash"} : Replace text in a file or files where `text` is the regular expression to search for, whilst `replace` is the text you want in its place. Here the `s` specifies the substitution operation and `g` specifies you want to replace all occurrences found in the text. `$`s are the delimiters that aim to separate the substitution operator, the text, the replacement and the character that specifies in which ocurrences the text should be replaced. This delimiter can be any symbol that does not interfere with the `text` and its `replacement`. Ex: ```"s/text/replacement/g"```{lang=bash}, ```"s|text|replacement|g"```{lang=bash}...


### Du | Get the size of a folder or a file
Du (**D**isk **U**sage) is a command that gives you the size that takes on the disk of a filesystem element.
```bash
du -h -s ./folder
```
- **-h** : Prints the result in a format that is easily understood by humans.
- **-s** : It shows only the total size of the size of a folder, instead of showing the size of all elements inside it.


### Wc | Print the number of lines, words or bytes from an input or a file

Wc (**W**ord **c**ounting) is a command that helps you to count lines and words inside a file or an input. The following command counts the number of lines result of the ls command. Since each line represents a file or a directory, the whole command that is shown below counts the number of elements inside a directory:

If instead, you want to count the number of words in a file:
```bash
wc -w file
```

Or a number of bytes:
```bash
wc -c file
```

By default `wc` without any arguments returns 3 numbers that represent: the number of lines, number of words and number of bytes.

<!-- ### Sort | Sort lines of a file or a text received as input
The sort command can be fed through a file or the standard input.

In the case you want to sort lines of a file by number you can do the following:

```bash
sort -n file
```

If you want to sort by  -->


### Find | Du | Get a sorted list of all directories in a hierarchy ordered by their size
The following command searches recursively for all directories that exist in a path and obtains their size on disk. When the process finishes the result is piped into the `sort` command to sort the result based on the folder size output.
```bash
echo "$(for i in $(find /home/aegos/Descargas -type d); do du -hs $i 2>/dev/null; done;)" | sort -h
```

Translated to human language the command above means the following: For each folder found by the find command execute `du` to check the space of each `i` directory on disk and pass the entire result of the query to the command `sort` to organize the result based on the space.

• ```find "./folder" -type d```{lang="bash"} : Search for all directories in a path.

• ```du -hs```{lang="bash"} : Prints the size of a folder in a human readable way, together with the directory path name.

• ```sort -h```{lang="bash"} : Sort the entire result by the size obtained with du. The `-h` argument indicates the command that you want to sort using the size information that was printed in a human readable way. In this way data such as: `21G`, `10M`, `100K` is sorted accordingly.

### Find | Wc | Get the number of files inside all directories in a hierarchy
The following command searches recursively for all directories that exist in a path and obtains the number of elements inside. When the process finishes the result is piped into the `sort` command to sort the result based on the number of elements inside. Useful for cluster clients with resource limits such as a maximum number of files, the command allows you to identify which is the folder with more files inside.
```bash
echo "$(for i in $(find /folder -type d); do echo "$( ls -la "$i" 2>/dev/null| grep "^[-]"| wc -l) $i"; done;)"| sort -n
```

Translated to human language the command above means the following: For each folder found by the find command execute `ls` to get the elements inside each folder `i`, filter the result to get only file elements and pass its result to the command `wc -l` to count them. When all directories have been visited, pass the entire result to the `sort` command to organize the directories based on their ammount of elements.

• ```find ./folder -type d```{lang="bash"} : Search for all directories in a path.

• ```echo "$( ls -la "$i" 2>/dev/null| grep "^[-]"| wc -l) $i"; done;)"```{lang="bash"} : Prints the result of executing the command that counts the number of files inside a directory together with the path of `i`.
- \- ```ls -la "$i" 2>/dev/null```{lang="bash"} : Get all elements of a directory and if there is any error output to /dev/null to prevent it from getting piped into the next command. `2>/dev/null` redirects stderr to `/dev/null`. 
- \- ```grep "^[-]"```{lang="bash"} : Print only lines that start with `-` from the output of `ls` that will match with those lines that refer to a file, filtering in this way every directory or symbolic link.
- \- `wc -l`{lang="bash"} : From the filtered result obtained with `grep` print the number of lines.

• ```sort -n```{lang="bash"} : Sort the entire result by the count result obtained with `wc`. The `-n` argument indicates the command that you want to sort by number.


### Setsid | Run a command in background
Setsid allows you to run a command with no controlling terminal. Normally if you execute a program inside the terminal, the shell you are using is the parent process of the new process. When you close the shell a SIGHUP (**Sig**nal **h**ang **up**) signal is sent to all its child processes, which by default its response to this behavior is terminate. Setsid makes the new process a session and process group leader, whose father would be directly systemd (or init depending of the linux distribution you are on), which means that it will not receive the SIGHUP signal when the controlling terminal is closed since the program does not hang from it.

```bash
setsid firefox &>/dev/null
```

> It is important to mention that by default the program output is still attached to the terminal from where setsid is executed, so if you don't want your terminal to be polluted with the output or errors coming from the new program executed (`firefox` in the case of the command above), you can redirect its output to the null device: `&>/dev/null`{lang="bash"}. `1>`{lang="bash"} to redirect the output (stdout), `2>`{lang="bash"} to redirect errors (stderr) and `&>`{lang="bash"} to redirect both of them.

### Nohup | Run a command in background by making it ignore the sighup signal
Nohup allows you to run a command that will ignore any SIGHUP signal received. When the shell closes, the process started with nohup ignores the SIGHUP signal, becoming, in this way, an orphan. The orphan process will then be adopted by systemd or init, allowing its execution continuity in background.

```bash
nohup firefox &>/dev/null &
```
> If you are using `zsh` instead of `bash` you can run a program in background just by putting `&!` at the end of command such as `firefox &!`{lang="bash"}


### Tee | Redirect the output of a command to multiple outputs
```bash

```

### Python | Using Python directly from the terminal
```bash

```

### Email | Send an email through the terminal
```bash

```

### Lsof | Get files opened by a specific process
```bash

```

### Lsof | Get PID of a process using a specific network port
```bash

```

### Ulimit | Check the amount of resources available for your user
```bash

```

## Rsync

### Synchronize two folders with Rsync, including or excluding type files
```bash

```

## SSH

### Redirect port of remote machine into the local machine
```bash

```

### Redirect the port of the local machine into a remote machine
```bash

```

### Create a SOCKS5 proxy with SSH
```bash

```

### Mount a remote filesystem using SSHFS
```bash

```

### Execute a command in parallel in different hosts
```bash

```

### Copy a file into another host using SSH
```bash

```

## NMAP
### Scan devices in a network
```bash

```