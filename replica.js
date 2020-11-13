/*
 * Access any instance from mongo cluster and from the shell execute the commands below one by one.
 */
//Creates the replica set.
rs.initiate();

//Adds the host mongodb_rpl_1 to the replica set.
rs.add('mongodb_rpl_1:27019');

//Adds the host mongodb_rpl_2 to the replica set.
rs.add('mongodb_rpl_2:27020');

//Shows information about synced replicas.
rs.printSlaveReplicationInfo();

//Shows information about the replica set.
db.runCommand("ismaster");