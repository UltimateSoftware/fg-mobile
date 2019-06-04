Atoms are used to build Molecules and Organisms

while Atoms should not import other Atoms, sometimes it is appropriate.

The main strategy for deciding when a Component is an Primative, Atom, Molecule, or Organism depends on many things, such as a Component which needs state.

In general Components which use state should be placed in ./pages, pages are built off of Organisms or Molecules (with Atoms in between).

A component is an Atom when it renders some basic building block, like the way buttons look or form input.