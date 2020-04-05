'use strict';

const DefaultSettings = {
  "enable": true,
  "enableAuto": true,
  "lootDelay": 400,
  "loopInterval": 300,

  "blacklist": [
	7214, // Scroll of Resurrection
	8000, // Rejuvenation Mote
	8001, // HP Recovery Mote
	8002, // MP Replenishment Mote
	8003, // Spirited MP Replenishment Mote
	8004, // Strong Resistance Mote
	8005, // Healing Mote
	8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, // Arun's Vitae I-XV Mote
	8023, // Arun's Tear Mote
	88875, // Annihilation Brooch
	88876, // Annihilation Brooch
	88877, // Annihilation Brooch
	88878, // Annihilation Brooch
	88879, // Dark Light Brooch
	88880, // Dark Light Brooch
	88881, // Dark Light Brooch
	88882, // Dark Light Brooch
	89030, // Tithus's Relic
	89020, // Elinu's Relic
	89130, // Dagon's Halidom
	89120, // Karas's Halidom
	98778, // Black Core Nodule
	98779, // Black Core Shard
	155546, // Arborean Crystal Box
	206858, // Naslow's Treasure Map
	206859, // Naslow's Treasure Map
	206860, // Naslow's Treasure Map
	206861, // Naslow's Treasure Map
	206862 // Naslow's Treasure Map
  ]
};

function MigrateSettings(from_ver, to_ver, settings) {
  if (from_ver === undefined) {
	return Object.assign(Object.assign({}, DefaultSettings), settings);
  }
  else if (from_ver === null) {
	return DefaultSettings;
  }
  else {
	if (from_ver + 1 < to_ver) {
	  settings = MigrateSettings(from_ver, from_ver + 1, settings);
	  return MigrateSettings(from_ver + 1, to_ver, settings);
	}
	switch (to_ver) {
	  //
	}

	return settings;
  }
}

module.exports = MigrateSettings;