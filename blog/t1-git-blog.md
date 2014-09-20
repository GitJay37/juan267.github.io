<!-- This template is in markdown, not html, so
  it will not render beautifully when you copy and
  paste it into your github.io site, but it will at
  least be published. Next week you'll be creating a
  blog template using HTML and CSS and you'll be able
  to copy and paste the blog posts from week 1 in there
  to make them pretty next week.

  For now, please replace the title, subtitle (if desired),
  and date with the text you would like. Markdown is pretty
  simple, so you can just feel free to type. =) -->


# Conversations with the ghost in the machine
#### Hello Git and Github
#### 9/20/2014

As my journey begins to understand the forces and powers that are underneath this beautiful invention called computers and their language, I get acquaintance with one of the tools that is not meant to directly help developers talk to computers but instead help them work together in teams.

Let me introduce you to Git, the child of Linus Torvalds also proud father of the Linux Kernel, seriously what else can we say about this guy besides that he is a genius.  The Linux project started a revolution that lead to the wide spreading of the use of open source software. This revolution come with its own set of problems that needed to be dealt with, one of them being how to keep track and accountability over the source code of a project when multiple developers that where spread all over the world where working on it at the same time.  Linus being the total badass that he is created Git to tack this specific and relevant problem.

What Git basically does is version control. This means that every time any change is made to a file or a new element is introduce to a directory, Git will keep track of this change, the user that made the change and the time when it was done. This is very helpful to have accountability over a project, but the most powerful feature of git is letting teams of developers have   non-linear and distributed development. Lets dissect does last word bit by bit to really understand this concepts.

* Non-linear:  Lets think for a moment that a software project looks like beautiful tree.  The first think that we can notice is the thick robust trunk of the tree that is the foundation where the entire tree relies on.  Then if we inset further we can see several branches emerging from the trunk, and each branches can have by itself other branches coming out of it.  So what does this have to do with code? , well the trunk  of the tree is the master version of the code that we are working on, is the most precious part of the tree and it must be always in an operational status in order to support the rest of the tree.  Being so important we don’t want to touch the trunk if there is any risk that we may end up with a dying tree, so this is why we create branches. A branch can be thing of as an experiment that the developer creates to test a change that could potentially damage the code itself. If he sees that the change is behaving in the expected way and everything works fine, he can then merge the branch with the trunk and thought improving the all the tree.  So non linear means that developers can use git to keeps several branches of the source code witch enables them to experiment on them without risking hurting the production code.

* Distributed: With git a developer can copy in its entirety the development history of a project. Meaning that he can work locally on a project as a separate branch than the master branch.  This makes possible to distribute the development of an specific project in where a team of developers all work on the same file without overstepping other works.

Ok enough about Git , lets now tackle  Git best friend GitHub. First things first lets establish the relationship between these two.  Git can live all by itself and this has been the way that it has survived for a number of years until Github arrived, Now Github cannot live without Git and thought it whole operation relies on the use of Git. To see this in amore simple way, Git does all the magic and Github exposed all this magic to the web helping developers share their work in a more easy way.

Github is a web-based application to store remote repositories and share code with the rest of the world. Its purposed is to let teams share remote repositories that are accessible from any device in any part of the world hat has access to the Internet.  The reason to use Github is because it takes all the functionalities of Git and elevates them to a next level of sharing and community handling of repositories of code. When I create a repository in Github with some code that I created, tis becomes available to anyone that wants to use it, and in the best case scenario contribute to it following Git procedures.  GitHub in its essence is a social hub to share and contribute to open source development of code.

I will be expanding this article as i get a better understaing on how all of this mix together. But for now lets continue our journey tu understand the ghost inside the machine.



