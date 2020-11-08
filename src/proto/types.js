/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ecmaserve = (function() {

    /**
     * Namespace ecmaserve.
     * @exports ecmaserve
     * @namespace
     */
    var ecmaserve = {};

    ecmaserve.trash = (function() {

        /**
         * Namespace trash.
         * @memberof ecmaserve
         * @namespace
         */
        var trash = {};

        trash.StartGame = (function() {

            /**
             * Properties of a StartGame.
             * @memberof ecmaserve.trash
             * @interface IStartGame
             */

            /**
             * Constructs a new StartGame.
             * @memberof ecmaserve.trash
             * @classdesc Represents a StartGame.
             * @implements IStartGame
             * @constructor
             * @param {ecmaserve.trash.IStartGame=} [properties] Properties to set
             */
            function StartGame(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new StartGame instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.StartGame
             * @static
             * @param {ecmaserve.trash.IStartGame=} [properties] Properties to set
             * @returns {ecmaserve.trash.StartGame} StartGame instance
             */
            StartGame.create = function create(properties) {
                return new StartGame(properties);
            };

            /**
             * Encodes the specified StartGame message. Does not implicitly {@link ecmaserve.trash.StartGame.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.StartGame
             * @static
             * @param {ecmaserve.trash.IStartGame} message StartGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGame.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified StartGame message, length delimited. Does not implicitly {@link ecmaserve.trash.StartGame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.StartGame
             * @static
             * @param {ecmaserve.trash.IStartGame} message StartGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartGame.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartGame message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.StartGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.StartGame} StartGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGame.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.StartGame();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartGame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.StartGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.StartGame} StartGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartGame.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartGame message.
             * @function verify
             * @memberof ecmaserve.trash.StartGame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartGame.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a StartGame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.StartGame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.StartGame} StartGame
             */
            StartGame.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.StartGame)
                    return object;
                return new $root.ecmaserve.trash.StartGame();
            };

            /**
             * Creates a plain object from a StartGame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.StartGame
             * @static
             * @param {ecmaserve.trash.StartGame} message StartGame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartGame.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this StartGame to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.StartGame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartGame.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StartGame;
        })();

        trash.JoinGame = (function() {

            /**
             * Properties of a JoinGame.
             * @memberof ecmaserve.trash
             * @interface IJoinGame
             */

            /**
             * Constructs a new JoinGame.
             * @memberof ecmaserve.trash
             * @classdesc Represents a JoinGame.
             * @implements IJoinGame
             * @constructor
             * @param {ecmaserve.trash.IJoinGame=} [properties] Properties to set
             */
            function JoinGame(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new JoinGame instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.JoinGame
             * @static
             * @param {ecmaserve.trash.IJoinGame=} [properties] Properties to set
             * @returns {ecmaserve.trash.JoinGame} JoinGame instance
             */
            JoinGame.create = function create(properties) {
                return new JoinGame(properties);
            };

            /**
             * Encodes the specified JoinGame message. Does not implicitly {@link ecmaserve.trash.JoinGame.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.JoinGame
             * @static
             * @param {ecmaserve.trash.IJoinGame} message JoinGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinGame.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified JoinGame message, length delimited. Does not implicitly {@link ecmaserve.trash.JoinGame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.JoinGame
             * @static
             * @param {ecmaserve.trash.IJoinGame} message JoinGame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            JoinGame.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a JoinGame message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.JoinGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.JoinGame} JoinGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinGame.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.JoinGame();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a JoinGame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.JoinGame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.JoinGame} JoinGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            JoinGame.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a JoinGame message.
             * @function verify
             * @memberof ecmaserve.trash.JoinGame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            JoinGame.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a JoinGame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.JoinGame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.JoinGame} JoinGame
             */
            JoinGame.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.JoinGame)
                    return object;
                return new $root.ecmaserve.trash.JoinGame();
            };

            /**
             * Creates a plain object from a JoinGame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.JoinGame
             * @static
             * @param {ecmaserve.trash.JoinGame} message JoinGame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            JoinGame.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this JoinGame to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.JoinGame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            JoinGame.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return JoinGame;
        })();

        /**
         * CardSource enum.
         * @name ecmaserve.trash.CardSource
         * @enum {number}
         * @property {number} discard=1 discard value
         * @property {number} draw=2 draw value
         */
        trash.CardSource = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "discard"] = 1;
            values[valuesById[2] = "draw"] = 2;
            return values;
        })();

        trash.DrawCard = (function() {

            /**
             * Properties of a DrawCard.
             * @memberof ecmaserve.trash
             * @interface IDrawCard
             * @property {ecmaserve.trash.CardSource|null} [source] DrawCard source
             */

            /**
             * Constructs a new DrawCard.
             * @memberof ecmaserve.trash
             * @classdesc Represents a DrawCard.
             * @implements IDrawCard
             * @constructor
             * @param {ecmaserve.trash.IDrawCard=} [properties] Properties to set
             */
            function DrawCard(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DrawCard source.
             * @member {ecmaserve.trash.CardSource} source
             * @memberof ecmaserve.trash.DrawCard
             * @instance
             */
            DrawCard.prototype.source = 1;

            /**
             * Creates a new DrawCard instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.DrawCard
             * @static
             * @param {ecmaserve.trash.IDrawCard=} [properties] Properties to set
             * @returns {ecmaserve.trash.DrawCard} DrawCard instance
             */
            DrawCard.create = function create(properties) {
                return new DrawCard(properties);
            };

            /**
             * Encodes the specified DrawCard message. Does not implicitly {@link ecmaserve.trash.DrawCard.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.DrawCard
             * @static
             * @param {ecmaserve.trash.IDrawCard} message DrawCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawCard.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.source);
                return writer;
            };

            /**
             * Encodes the specified DrawCard message, length delimited. Does not implicitly {@link ecmaserve.trash.DrawCard.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.DrawCard
             * @static
             * @param {ecmaserve.trash.IDrawCard} message DrawCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawCard.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DrawCard message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.DrawCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.DrawCard} DrawCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawCard.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.DrawCard();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.source = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DrawCard message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.DrawCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.DrawCard} DrawCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawCard.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DrawCard message.
             * @function verify
             * @memberof ecmaserve.trash.DrawCard
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DrawCard.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.source != null && message.hasOwnProperty("source"))
                    switch (message.source) {
                    default:
                        return "source: enum value expected";
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a DrawCard message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.DrawCard
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.DrawCard} DrawCard
             */
            DrawCard.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.DrawCard)
                    return object;
                var message = new $root.ecmaserve.trash.DrawCard();
                switch (object.source) {
                case "discard":
                case 1:
                    message.source = 1;
                    break;
                case "draw":
                case 2:
                    message.source = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a DrawCard message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.DrawCard
             * @static
             * @param {ecmaserve.trash.DrawCard} message DrawCard
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DrawCard.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.source = options.enums === String ? "discard" : 1;
                if (message.source != null && message.hasOwnProperty("source"))
                    object.source = options.enums === String ? $root.ecmaserve.trash.CardSource[message.source] : message.source;
                return object;
            };

            /**
             * Converts this DrawCard to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.DrawCard
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DrawCard.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DrawCard;
        })();

        /**
         * SlotNumber enum.
         * @name ecmaserve.trash.SlotNumber
         * @enum {number}
         * @property {number} slot1=1 slot1 value
         * @property {number} slot2=2 slot2 value
         * @property {number} slot3=3 slot3 value
         * @property {number} slot4=4 slot4 value
         * @property {number} slot5=5 slot5 value
         * @property {number} slot6=6 slot6 value
         * @property {number} slot7=7 slot7 value
         * @property {number} slot8=8 slot8 value
         * @property {number} slot9=9 slot9 value
         * @property {number} slot10=10 slot10 value
         */
        trash.SlotNumber = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "slot1"] = 1;
            values[valuesById[2] = "slot2"] = 2;
            values[valuesById[3] = "slot3"] = 3;
            values[valuesById[4] = "slot4"] = 4;
            values[valuesById[5] = "slot5"] = 5;
            values[valuesById[6] = "slot6"] = 6;
            values[valuesById[7] = "slot7"] = 7;
            values[valuesById[8] = "slot8"] = 8;
            values[valuesById[9] = "slot9"] = 9;
            values[valuesById[10] = "slot10"] = 10;
            return values;
        })();

        trash.ReplaceCard = (function() {

            /**
             * Properties of a ReplaceCard.
             * @memberof ecmaserve.trash
             * @interface IReplaceCard
             * @property {ecmaserve.trash.SlotNumber|null} [slot] ReplaceCard slot
             */

            /**
             * Constructs a new ReplaceCard.
             * @memberof ecmaserve.trash
             * @classdesc Represents a ReplaceCard.
             * @implements IReplaceCard
             * @constructor
             * @param {ecmaserve.trash.IReplaceCard=} [properties] Properties to set
             */
            function ReplaceCard(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ReplaceCard slot.
             * @member {ecmaserve.trash.SlotNumber} slot
             * @memberof ecmaserve.trash.ReplaceCard
             * @instance
             */
            ReplaceCard.prototype.slot = 1;

            /**
             * Creates a new ReplaceCard instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.ReplaceCard
             * @static
             * @param {ecmaserve.trash.IReplaceCard=} [properties] Properties to set
             * @returns {ecmaserve.trash.ReplaceCard} ReplaceCard instance
             */
            ReplaceCard.create = function create(properties) {
                return new ReplaceCard(properties);
            };

            /**
             * Encodes the specified ReplaceCard message. Does not implicitly {@link ecmaserve.trash.ReplaceCard.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.ReplaceCard
             * @static
             * @param {ecmaserve.trash.IReplaceCard} message ReplaceCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReplaceCard.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.slot != null && Object.hasOwnProperty.call(message, "slot"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.slot);
                return writer;
            };

            /**
             * Encodes the specified ReplaceCard message, length delimited. Does not implicitly {@link ecmaserve.trash.ReplaceCard.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.ReplaceCard
             * @static
             * @param {ecmaserve.trash.IReplaceCard} message ReplaceCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ReplaceCard.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ReplaceCard message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.ReplaceCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.ReplaceCard} ReplaceCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReplaceCard.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.ReplaceCard();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.slot = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ReplaceCard message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.ReplaceCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.ReplaceCard} ReplaceCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ReplaceCard.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ReplaceCard message.
             * @function verify
             * @memberof ecmaserve.trash.ReplaceCard
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ReplaceCard.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.slot != null && message.hasOwnProperty("slot"))
                    switch (message.slot) {
                    default:
                        return "slot: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        break;
                    }
                return null;
            };

            /**
             * Creates a ReplaceCard message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.ReplaceCard
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.ReplaceCard} ReplaceCard
             */
            ReplaceCard.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.ReplaceCard)
                    return object;
                var message = new $root.ecmaserve.trash.ReplaceCard();
                switch (object.slot) {
                case "slot1":
                case 1:
                    message.slot = 1;
                    break;
                case "slot2":
                case 2:
                    message.slot = 2;
                    break;
                case "slot3":
                case 3:
                    message.slot = 3;
                    break;
                case "slot4":
                case 4:
                    message.slot = 4;
                    break;
                case "slot5":
                case 5:
                    message.slot = 5;
                    break;
                case "slot6":
                case 6:
                    message.slot = 6;
                    break;
                case "slot7":
                case 7:
                    message.slot = 7;
                    break;
                case "slot8":
                case 8:
                    message.slot = 8;
                    break;
                case "slot9":
                case 9:
                    message.slot = 9;
                    break;
                case "slot10":
                case 10:
                    message.slot = 10;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a ReplaceCard message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.ReplaceCard
             * @static
             * @param {ecmaserve.trash.ReplaceCard} message ReplaceCard
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ReplaceCard.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.slot = options.enums === String ? "slot1" : 1;
                if (message.slot != null && message.hasOwnProperty("slot"))
                    object.slot = options.enums === String ? $root.ecmaserve.trash.SlotNumber[message.slot] : message.slot;
                return object;
            };

            /**
             * Converts this ReplaceCard to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.ReplaceCard
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ReplaceCard.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ReplaceCard;
        })();

        trash.DiscardCard = (function() {

            /**
             * Properties of a DiscardCard.
             * @memberof ecmaserve.trash
             * @interface IDiscardCard
             */

            /**
             * Constructs a new DiscardCard.
             * @memberof ecmaserve.trash
             * @classdesc Represents a DiscardCard.
             * @implements IDiscardCard
             * @constructor
             * @param {ecmaserve.trash.IDiscardCard=} [properties] Properties to set
             */
            function DiscardCard(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new DiscardCard instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.DiscardCard
             * @static
             * @param {ecmaserve.trash.IDiscardCard=} [properties] Properties to set
             * @returns {ecmaserve.trash.DiscardCard} DiscardCard instance
             */
            DiscardCard.create = function create(properties) {
                return new DiscardCard(properties);
            };

            /**
             * Encodes the specified DiscardCard message. Does not implicitly {@link ecmaserve.trash.DiscardCard.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.DiscardCard
             * @static
             * @param {ecmaserve.trash.IDiscardCard} message DiscardCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardCard.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified DiscardCard message, length delimited. Does not implicitly {@link ecmaserve.trash.DiscardCard.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.DiscardCard
             * @static
             * @param {ecmaserve.trash.IDiscardCard} message DiscardCard message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardCard.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardCard message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.DiscardCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.DiscardCard} DiscardCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardCard.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.DiscardCard();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DiscardCard message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.DiscardCard
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.DiscardCard} DiscardCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardCard.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardCard message.
             * @function verify
             * @memberof ecmaserve.trash.DiscardCard
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardCard.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a DiscardCard message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.DiscardCard
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.DiscardCard} DiscardCard
             */
            DiscardCard.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.DiscardCard)
                    return object;
                return new $root.ecmaserve.trash.DiscardCard();
            };

            /**
             * Creates a plain object from a DiscardCard message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.DiscardCard
             * @static
             * @param {ecmaserve.trash.DiscardCard} message DiscardCard
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardCard.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this DiscardCard to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.DiscardCard
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardCard.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DiscardCard;
        })();

        trash.Actions = (function() {

            /**
             * Properties of an Actions.
             * @memberof ecmaserve.trash
             * @interface IActions
             * @property {ecmaserve.trash.IDrawCard|null} [draw] Actions draw
             * @property {ecmaserve.trash.IReplaceCard|null} [replace] Actions replace
             * @property {ecmaserve.trash.IStartGame|null} [start] Actions start
             * @property {ecmaserve.trash.IJoinGame|null} [join] Actions join
             * @property {ecmaserve.trash.IDiscardCard|null} [discard] Actions discard
             */

            /**
             * Constructs a new Actions.
             * @memberof ecmaserve.trash
             * @classdesc Represents an Actions.
             * @implements IActions
             * @constructor
             * @param {ecmaserve.trash.IActions=} [properties] Properties to set
             */
            function Actions(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Actions draw.
             * @member {ecmaserve.trash.IDrawCard|null|undefined} draw
             * @memberof ecmaserve.trash.Actions
             * @instance
             */
            Actions.prototype.draw = null;

            /**
             * Actions replace.
             * @member {ecmaserve.trash.IReplaceCard|null|undefined} replace
             * @memberof ecmaserve.trash.Actions
             * @instance
             */
            Actions.prototype.replace = null;

            /**
             * Actions start.
             * @member {ecmaserve.trash.IStartGame|null|undefined} start
             * @memberof ecmaserve.trash.Actions
             * @instance
             */
            Actions.prototype.start = null;

            /**
             * Actions join.
             * @member {ecmaserve.trash.IJoinGame|null|undefined} join
             * @memberof ecmaserve.trash.Actions
             * @instance
             */
            Actions.prototype.join = null;

            /**
             * Actions discard.
             * @member {ecmaserve.trash.IDiscardCard|null|undefined} discard
             * @memberof ecmaserve.trash.Actions
             * @instance
             */
            Actions.prototype.discard = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Actions Action.
             * @member {"draw"|"replace"|"start"|"join"|"discard"|undefined} Action
             * @memberof ecmaserve.trash.Actions
             * @instance
             */
            Object.defineProperty(Actions.prototype, "Action", {
                get: $util.oneOfGetter($oneOfFields = ["draw", "replace", "start", "join", "discard"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Actions instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.Actions
             * @static
             * @param {ecmaserve.trash.IActions=} [properties] Properties to set
             * @returns {ecmaserve.trash.Actions} Actions instance
             */
            Actions.create = function create(properties) {
                return new Actions(properties);
            };

            /**
             * Encodes the specified Actions message. Does not implicitly {@link ecmaserve.trash.Actions.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.Actions
             * @static
             * @param {ecmaserve.trash.IActions} message Actions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Actions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.draw != null && Object.hasOwnProperty.call(message, "draw"))
                    $root.ecmaserve.trash.DrawCard.encode(message.draw, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.replace != null && Object.hasOwnProperty.call(message, "replace"))
                    $root.ecmaserve.trash.ReplaceCard.encode(message.replace, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.ecmaserve.trash.StartGame.encode(message.start, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.join != null && Object.hasOwnProperty.call(message, "join"))
                    $root.ecmaserve.trash.JoinGame.encode(message.join, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.discard != null && Object.hasOwnProperty.call(message, "discard"))
                    $root.ecmaserve.trash.DiscardCard.encode(message.discard, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Actions message, length delimited. Does not implicitly {@link ecmaserve.trash.Actions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.Actions
             * @static
             * @param {ecmaserve.trash.IActions} message Actions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Actions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Actions message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.Actions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.Actions} Actions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Actions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.Actions();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.draw = $root.ecmaserve.trash.DrawCard.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.replace = $root.ecmaserve.trash.ReplaceCard.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.start = $root.ecmaserve.trash.StartGame.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.join = $root.ecmaserve.trash.JoinGame.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.discard = $root.ecmaserve.trash.DiscardCard.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Actions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.Actions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.Actions} Actions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Actions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Actions message.
             * @function verify
             * @memberof ecmaserve.trash.Actions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Actions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.draw != null && message.hasOwnProperty("draw")) {
                    properties.Action = 1;
                    {
                        var error = $root.ecmaserve.trash.DrawCard.verify(message.draw);
                        if (error)
                            return "draw." + error;
                    }
                }
                if (message.replace != null && message.hasOwnProperty("replace")) {
                    if (properties.Action === 1)
                        return "Action: multiple values";
                    properties.Action = 1;
                    {
                        var error = $root.ecmaserve.trash.ReplaceCard.verify(message.replace);
                        if (error)
                            return "replace." + error;
                    }
                }
                if (message.start != null && message.hasOwnProperty("start")) {
                    if (properties.Action === 1)
                        return "Action: multiple values";
                    properties.Action = 1;
                    {
                        var error = $root.ecmaserve.trash.StartGame.verify(message.start);
                        if (error)
                            return "start." + error;
                    }
                }
                if (message.join != null && message.hasOwnProperty("join")) {
                    if (properties.Action === 1)
                        return "Action: multiple values";
                    properties.Action = 1;
                    {
                        var error = $root.ecmaserve.trash.JoinGame.verify(message.join);
                        if (error)
                            return "join." + error;
                    }
                }
                if (message.discard != null && message.hasOwnProperty("discard")) {
                    if (properties.Action === 1)
                        return "Action: multiple values";
                    properties.Action = 1;
                    {
                        var error = $root.ecmaserve.trash.DiscardCard.verify(message.discard);
                        if (error)
                            return "discard." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Actions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.Actions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.Actions} Actions
             */
            Actions.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.Actions)
                    return object;
                var message = new $root.ecmaserve.trash.Actions();
                if (object.draw != null) {
                    if (typeof object.draw !== "object")
                        throw TypeError(".ecmaserve.trash.Actions.draw: object expected");
                    message.draw = $root.ecmaserve.trash.DrawCard.fromObject(object.draw);
                }
                if (object.replace != null) {
                    if (typeof object.replace !== "object")
                        throw TypeError(".ecmaserve.trash.Actions.replace: object expected");
                    message.replace = $root.ecmaserve.trash.ReplaceCard.fromObject(object.replace);
                }
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".ecmaserve.trash.Actions.start: object expected");
                    message.start = $root.ecmaserve.trash.StartGame.fromObject(object.start);
                }
                if (object.join != null) {
                    if (typeof object.join !== "object")
                        throw TypeError(".ecmaserve.trash.Actions.join: object expected");
                    message.join = $root.ecmaserve.trash.JoinGame.fromObject(object.join);
                }
                if (object.discard != null) {
                    if (typeof object.discard !== "object")
                        throw TypeError(".ecmaserve.trash.Actions.discard: object expected");
                    message.discard = $root.ecmaserve.trash.DiscardCard.fromObject(object.discard);
                }
                return message;
            };

            /**
             * Creates a plain object from an Actions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.Actions
             * @static
             * @param {ecmaserve.trash.Actions} message Actions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Actions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.draw != null && message.hasOwnProperty("draw")) {
                    object.draw = $root.ecmaserve.trash.DrawCard.toObject(message.draw, options);
                    if (options.oneofs)
                        object.Action = "draw";
                }
                if (message.replace != null && message.hasOwnProperty("replace")) {
                    object.replace = $root.ecmaserve.trash.ReplaceCard.toObject(message.replace, options);
                    if (options.oneofs)
                        object.Action = "replace";
                }
                if (message.start != null && message.hasOwnProperty("start")) {
                    object.start = $root.ecmaserve.trash.StartGame.toObject(message.start, options);
                    if (options.oneofs)
                        object.Action = "start";
                }
                if (message.join != null && message.hasOwnProperty("join")) {
                    object.join = $root.ecmaserve.trash.JoinGame.toObject(message.join, options);
                    if (options.oneofs)
                        object.Action = "join";
                }
                if (message.discard != null && message.hasOwnProperty("discard")) {
                    object.discard = $root.ecmaserve.trash.DiscardCard.toObject(message.discard, options);
                    if (options.oneofs)
                        object.Action = "discard";
                }
                return object;
            };

            /**
             * Converts this Actions to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.Actions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Actions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Actions;
        })();

        /**
         * Suite enum.
         * @name ecmaserve.trash.Suite
         * @enum {number}
         * @property {number} HEARTS=0 HEARTS value
         * @property {number} CLUBS=1 CLUBS value
         * @property {number} SPADES=2 SPADES value
         * @property {number} DIAMONDS=3 DIAMONDS value
         */
        trash.Suite = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "HEARTS"] = 0;
            values[valuesById[1] = "CLUBS"] = 1;
            values[valuesById[2] = "SPADES"] = 2;
            values[valuesById[3] = "DIAMONDS"] = 3;
            return values;
        })();

        /**
         * FaceValue enum.
         * @name ecmaserve.trash.FaceValue
         * @enum {number}
         * @property {number} Ace=1 Ace value
         * @property {number} Two=2 Two value
         * @property {number} Three=3 Three value
         * @property {number} Four=4 Four value
         * @property {number} Five=5 Five value
         * @property {number} Six=6 Six value
         * @property {number} Seven=7 Seven value
         * @property {number} Eight=8 Eight value
         * @property {number} Nine=9 Nine value
         * @property {number} Ten=10 Ten value
         * @property {number} Jack=11 Jack value
         * @property {number} Queen=12 Queen value
         * @property {number} King=13 King value
         */
        trash.FaceValue = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "Ace"] = 1;
            values[valuesById[2] = "Two"] = 2;
            values[valuesById[3] = "Three"] = 3;
            values[valuesById[4] = "Four"] = 4;
            values[valuesById[5] = "Five"] = 5;
            values[valuesById[6] = "Six"] = 6;
            values[valuesById[7] = "Seven"] = 7;
            values[valuesById[8] = "Eight"] = 8;
            values[valuesById[9] = "Nine"] = 9;
            values[valuesById[10] = "Ten"] = 10;
            values[valuesById[11] = "Jack"] = 11;
            values[valuesById[12] = "Queen"] = 12;
            values[valuesById[13] = "King"] = 13;
            return values;
        })();

        trash.Card = (function() {

            /**
             * Properties of a Card.
             * @memberof ecmaserve.trash
             * @interface ICard
             * @property {ecmaserve.trash.Suite|null} [suite] Card suite
             * @property {ecmaserve.trash.FaceValue|null} [value] Card value
             */

            /**
             * Constructs a new Card.
             * @memberof ecmaserve.trash
             * @classdesc Represents a Card.
             * @implements ICard
             * @constructor
             * @param {ecmaserve.trash.ICard=} [properties] Properties to set
             */
            function Card(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Card suite.
             * @member {ecmaserve.trash.Suite} suite
             * @memberof ecmaserve.trash.Card
             * @instance
             */
            Card.prototype.suite = 0;

            /**
             * Card value.
             * @member {ecmaserve.trash.FaceValue} value
             * @memberof ecmaserve.trash.Card
             * @instance
             */
            Card.prototype.value = 1;

            /**
             * Creates a new Card instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.Card
             * @static
             * @param {ecmaserve.trash.ICard=} [properties] Properties to set
             * @returns {ecmaserve.trash.Card} Card instance
             */
            Card.create = function create(properties) {
                return new Card(properties);
            };

            /**
             * Encodes the specified Card message. Does not implicitly {@link ecmaserve.trash.Card.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.Card
             * @static
             * @param {ecmaserve.trash.ICard} message Card message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Card.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.suite != null && Object.hasOwnProperty.call(message, "suite"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.suite);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Card message, length delimited. Does not implicitly {@link ecmaserve.trash.Card.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.Card
             * @static
             * @param {ecmaserve.trash.ICard} message Card message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Card.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Card message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.Card
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.Card} Card
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Card.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.Card();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.suite = reader.int32();
                        break;
                    case 2:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Card message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.Card
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.Card} Card
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Card.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Card message.
             * @function verify
             * @memberof ecmaserve.trash.Card
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Card.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.suite != null && message.hasOwnProperty("suite"))
                    switch (message.suite) {
                    default:
                        return "suite: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    switch (message.value) {
                    default:
                        return "value: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        break;
                    }
                return null;
            };

            /**
             * Creates a Card message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.Card
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.Card} Card
             */
            Card.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.Card)
                    return object;
                var message = new $root.ecmaserve.trash.Card();
                switch (object.suite) {
                case "HEARTS":
                case 0:
                    message.suite = 0;
                    break;
                case "CLUBS":
                case 1:
                    message.suite = 1;
                    break;
                case "SPADES":
                case 2:
                    message.suite = 2;
                    break;
                case "DIAMONDS":
                case 3:
                    message.suite = 3;
                    break;
                }
                switch (object.value) {
                case "Ace":
                case 1:
                    message.value = 1;
                    break;
                case "Two":
                case 2:
                    message.value = 2;
                    break;
                case "Three":
                case 3:
                    message.value = 3;
                    break;
                case "Four":
                case 4:
                    message.value = 4;
                    break;
                case "Five":
                case 5:
                    message.value = 5;
                    break;
                case "Six":
                case 6:
                    message.value = 6;
                    break;
                case "Seven":
                case 7:
                    message.value = 7;
                    break;
                case "Eight":
                case 8:
                    message.value = 8;
                    break;
                case "Nine":
                case 9:
                    message.value = 9;
                    break;
                case "Ten":
                case 10:
                    message.value = 10;
                    break;
                case "Jack":
                case 11:
                    message.value = 11;
                    break;
                case "Queen":
                case 12:
                    message.value = 12;
                    break;
                case "King":
                case 13:
                    message.value = 13;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a Card message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.Card
             * @static
             * @param {ecmaserve.trash.Card} message Card
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Card.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.suite = options.enums === String ? "HEARTS" : 0;
                    object.value = options.enums === String ? "Ace" : 1;
                }
                if (message.suite != null && message.hasOwnProperty("suite"))
                    object.suite = options.enums === String ? $root.ecmaserve.trash.Suite[message.suite] : message.suite;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.enums === String ? $root.ecmaserve.trash.FaceValue[message.value] : message.value;
                return object;
            };

            /**
             * Converts this Card to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.Card
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Card.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Card;
        })();

        trash.Deck = (function() {

            /**
             * Properties of a Deck.
             * @memberof ecmaserve.trash
             * @interface IDeck
             * @property {Array.<ecmaserve.trash.ICard>|null} [cards] Deck cards
             */

            /**
             * Constructs a new Deck.
             * @memberof ecmaserve.trash
             * @classdesc Represents a Deck.
             * @implements IDeck
             * @constructor
             * @param {ecmaserve.trash.IDeck=} [properties] Properties to set
             */
            function Deck(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Deck cards.
             * @member {Array.<ecmaserve.trash.ICard>} cards
             * @memberof ecmaserve.trash.Deck
             * @instance
             */
            Deck.prototype.cards = $util.emptyArray;

            /**
             * Creates a new Deck instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.Deck
             * @static
             * @param {ecmaserve.trash.IDeck=} [properties] Properties to set
             * @returns {ecmaserve.trash.Deck} Deck instance
             */
            Deck.create = function create(properties) {
                return new Deck(properties);
            };

            /**
             * Encodes the specified Deck message. Does not implicitly {@link ecmaserve.trash.Deck.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.Deck
             * @static
             * @param {ecmaserve.trash.IDeck} message Deck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deck.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        $root.ecmaserve.trash.Card.encode(message.cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Deck message, length delimited. Does not implicitly {@link ecmaserve.trash.Deck.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.Deck
             * @static
             * @param {ecmaserve.trash.IDeck} message Deck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deck.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Deck message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.Deck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.Deck} Deck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Deck.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.Deck();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.ecmaserve.trash.Card.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Deck message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.Deck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.Deck} Deck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Deck.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Deck message.
             * @function verify
             * @memberof ecmaserve.trash.Deck
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Deck.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i) {
                        var error = $root.ecmaserve.trash.Card.verify(message.cards[i]);
                        if (error)
                            return "cards." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Deck message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.Deck
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.Deck} Deck
             */
            Deck.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.Deck)
                    return object;
                var message = new $root.ecmaserve.trash.Deck();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".ecmaserve.trash.Deck.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i) {
                        if (typeof object.cards[i] !== "object")
                            throw TypeError(".ecmaserve.trash.Deck.cards: object expected");
                        message.cards[i] = $root.ecmaserve.trash.Card.fromObject(object.cards[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Deck message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.Deck
             * @static
             * @param {ecmaserve.trash.Deck} message Deck
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Deck.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = $root.ecmaserve.trash.Card.toObject(message.cards[j], options);
                }
                return object;
            };

            /**
             * Converts this Deck to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.Deck
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Deck.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Deck;
        })();

        trash.DiscardPile = (function() {

            /**
             * Properties of a DiscardPile.
             * @memberof ecmaserve.trash
             * @interface IDiscardPile
             * @property {Array.<ecmaserve.trash.ICard>|null} [cards] DiscardPile cards
             */

            /**
             * Constructs a new DiscardPile.
             * @memberof ecmaserve.trash
             * @classdesc Represents a DiscardPile.
             * @implements IDiscardPile
             * @constructor
             * @param {ecmaserve.trash.IDiscardPile=} [properties] Properties to set
             */
            function DiscardPile(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscardPile cards.
             * @member {Array.<ecmaserve.trash.ICard>} cards
             * @memberof ecmaserve.trash.DiscardPile
             * @instance
             */
            DiscardPile.prototype.cards = $util.emptyArray;

            /**
             * Creates a new DiscardPile instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.DiscardPile
             * @static
             * @param {ecmaserve.trash.IDiscardPile=} [properties] Properties to set
             * @returns {ecmaserve.trash.DiscardPile} DiscardPile instance
             */
            DiscardPile.create = function create(properties) {
                return new DiscardPile(properties);
            };

            /**
             * Encodes the specified DiscardPile message. Does not implicitly {@link ecmaserve.trash.DiscardPile.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.DiscardPile
             * @static
             * @param {ecmaserve.trash.IDiscardPile} message DiscardPile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardPile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        $root.ecmaserve.trash.Card.encode(message.cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DiscardPile message, length delimited. Does not implicitly {@link ecmaserve.trash.DiscardPile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.DiscardPile
             * @static
             * @param {ecmaserve.trash.IDiscardPile} message DiscardPile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscardPile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscardPile message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.DiscardPile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.DiscardPile} DiscardPile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardPile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.DiscardPile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.ecmaserve.trash.Card.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DiscardPile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.DiscardPile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.DiscardPile} DiscardPile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscardPile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscardPile message.
             * @function verify
             * @memberof ecmaserve.trash.DiscardPile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscardPile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i) {
                        var error = $root.ecmaserve.trash.Card.verify(message.cards[i]);
                        if (error)
                            return "cards." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a DiscardPile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.DiscardPile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.DiscardPile} DiscardPile
             */
            DiscardPile.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.DiscardPile)
                    return object;
                var message = new $root.ecmaserve.trash.DiscardPile();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".ecmaserve.trash.DiscardPile.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i) {
                        if (typeof object.cards[i] !== "object")
                            throw TypeError(".ecmaserve.trash.DiscardPile.cards: object expected");
                        message.cards[i] = $root.ecmaserve.trash.Card.fromObject(object.cards[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a DiscardPile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.DiscardPile
             * @static
             * @param {ecmaserve.trash.DiscardPile} message DiscardPile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscardPile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = $root.ecmaserve.trash.Card.toObject(message.cards[j], options);
                }
                return object;
            };

            /**
             * Converts this DiscardPile to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.DiscardPile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscardPile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DiscardPile;
        })();

        trash.DrawPile = (function() {

            /**
             * Properties of a DrawPile.
             * @memberof ecmaserve.trash
             * @interface IDrawPile
             * @property {Array.<ecmaserve.trash.ICard>|null} [cards] DrawPile cards
             */

            /**
             * Constructs a new DrawPile.
             * @memberof ecmaserve.trash
             * @classdesc Represents a DrawPile.
             * @implements IDrawPile
             * @constructor
             * @param {ecmaserve.trash.IDrawPile=} [properties] Properties to set
             */
            function DrawPile(properties) {
                this.cards = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DrawPile cards.
             * @member {Array.<ecmaserve.trash.ICard>} cards
             * @memberof ecmaserve.trash.DrawPile
             * @instance
             */
            DrawPile.prototype.cards = $util.emptyArray;

            /**
             * Creates a new DrawPile instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.DrawPile
             * @static
             * @param {ecmaserve.trash.IDrawPile=} [properties] Properties to set
             * @returns {ecmaserve.trash.DrawPile} DrawPile instance
             */
            DrawPile.create = function create(properties) {
                return new DrawPile(properties);
            };

            /**
             * Encodes the specified DrawPile message. Does not implicitly {@link ecmaserve.trash.DrawPile.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.DrawPile
             * @static
             * @param {ecmaserve.trash.IDrawPile} message DrawPile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawPile.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cards != null && message.cards.length)
                    for (var i = 0; i < message.cards.length; ++i)
                        $root.ecmaserve.trash.Card.encode(message.cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DrawPile message, length delimited. Does not implicitly {@link ecmaserve.trash.DrawPile.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.DrawPile
             * @static
             * @param {ecmaserve.trash.IDrawPile} message DrawPile message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DrawPile.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DrawPile message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.DrawPile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.DrawPile} DrawPile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawPile.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.DrawPile();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        message.cards.push($root.ecmaserve.trash.Card.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DrawPile message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.DrawPile
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.DrawPile} DrawPile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DrawPile.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DrawPile message.
             * @function verify
             * @memberof ecmaserve.trash.DrawPile
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DrawPile.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cards != null && message.hasOwnProperty("cards")) {
                    if (!Array.isArray(message.cards))
                        return "cards: array expected";
                    for (var i = 0; i < message.cards.length; ++i) {
                        var error = $root.ecmaserve.trash.Card.verify(message.cards[i]);
                        if (error)
                            return "cards." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a DrawPile message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.DrawPile
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.DrawPile} DrawPile
             */
            DrawPile.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.DrawPile)
                    return object;
                var message = new $root.ecmaserve.trash.DrawPile();
                if (object.cards) {
                    if (!Array.isArray(object.cards))
                        throw TypeError(".ecmaserve.trash.DrawPile.cards: array expected");
                    message.cards = [];
                    for (var i = 0; i < object.cards.length; ++i) {
                        if (typeof object.cards[i] !== "object")
                            throw TypeError(".ecmaserve.trash.DrawPile.cards: object expected");
                        message.cards[i] = $root.ecmaserve.trash.Card.fromObject(object.cards[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a DrawPile message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.DrawPile
             * @static
             * @param {ecmaserve.trash.DrawPile} message DrawPile
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DrawPile.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.cards = [];
                if (message.cards && message.cards.length) {
                    object.cards = [];
                    for (var j = 0; j < message.cards.length; ++j)
                        object.cards[j] = $root.ecmaserve.trash.Card.toObject(message.cards[j], options);
                }
                return object;
            };

            /**
             * Converts this DrawPile to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.DrawPile
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DrawPile.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DrawPile;
        })();

        trash.CardSpot = (function() {

            /**
             * Properties of a CardSpot.
             * @memberof ecmaserve.trash
             * @interface ICardSpot
             * @property {ecmaserve.trash.ICard|null} [current] CardSpot current
             * @property {boolean|null} [faceDown] CardSpot faceDown
             * @property {boolean|null} [isRequired] CardSpot isRequired
             */

            /**
             * Constructs a new CardSpot.
             * @memberof ecmaserve.trash
             * @classdesc Represents a CardSpot.
             * @implements ICardSpot
             * @constructor
             * @param {ecmaserve.trash.ICardSpot=} [properties] Properties to set
             */
            function CardSpot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CardSpot current.
             * @member {ecmaserve.trash.ICard|null|undefined} current
             * @memberof ecmaserve.trash.CardSpot
             * @instance
             */
            CardSpot.prototype.current = null;

            /**
             * CardSpot faceDown.
             * @member {boolean} faceDown
             * @memberof ecmaserve.trash.CardSpot
             * @instance
             */
            CardSpot.prototype.faceDown = false;

            /**
             * CardSpot isRequired.
             * @member {boolean} isRequired
             * @memberof ecmaserve.trash.CardSpot
             * @instance
             */
            CardSpot.prototype.isRequired = false;

            /**
             * Creates a new CardSpot instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.CardSpot
             * @static
             * @param {ecmaserve.trash.ICardSpot=} [properties] Properties to set
             * @returns {ecmaserve.trash.CardSpot} CardSpot instance
             */
            CardSpot.create = function create(properties) {
                return new CardSpot(properties);
            };

            /**
             * Encodes the specified CardSpot message. Does not implicitly {@link ecmaserve.trash.CardSpot.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.CardSpot
             * @static
             * @param {ecmaserve.trash.ICardSpot} message CardSpot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CardSpot.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.current != null && Object.hasOwnProperty.call(message, "current"))
                    $root.ecmaserve.trash.Card.encode(message.current, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.faceDown != null && Object.hasOwnProperty.call(message, "faceDown"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.faceDown);
                if (message.isRequired != null && Object.hasOwnProperty.call(message, "isRequired"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isRequired);
                return writer;
            };

            /**
             * Encodes the specified CardSpot message, length delimited. Does not implicitly {@link ecmaserve.trash.CardSpot.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.CardSpot
             * @static
             * @param {ecmaserve.trash.ICardSpot} message CardSpot message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CardSpot.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CardSpot message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.CardSpot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.CardSpot} CardSpot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CardSpot.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.CardSpot();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.current = $root.ecmaserve.trash.Card.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.faceDown = reader.bool();
                        break;
                    case 4:
                        message.isRequired = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CardSpot message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.CardSpot
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.CardSpot} CardSpot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CardSpot.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CardSpot message.
             * @function verify
             * @memberof ecmaserve.trash.CardSpot
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CardSpot.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.current != null && message.hasOwnProperty("current")) {
                    var error = $root.ecmaserve.trash.Card.verify(message.current);
                    if (error)
                        return "current." + error;
                }
                if (message.faceDown != null && message.hasOwnProperty("faceDown"))
                    if (typeof message.faceDown !== "boolean")
                        return "faceDown: boolean expected";
                if (message.isRequired != null && message.hasOwnProperty("isRequired"))
                    if (typeof message.isRequired !== "boolean")
                        return "isRequired: boolean expected";
                return null;
            };

            /**
             * Creates a CardSpot message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.CardSpot
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.CardSpot} CardSpot
             */
            CardSpot.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.CardSpot)
                    return object;
                var message = new $root.ecmaserve.trash.CardSpot();
                if (object.current != null) {
                    if (typeof object.current !== "object")
                        throw TypeError(".ecmaserve.trash.CardSpot.current: object expected");
                    message.current = $root.ecmaserve.trash.Card.fromObject(object.current);
                }
                if (object.faceDown != null)
                    message.faceDown = Boolean(object.faceDown);
                if (object.isRequired != null)
                    message.isRequired = Boolean(object.isRequired);
                return message;
            };

            /**
             * Creates a plain object from a CardSpot message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.CardSpot
             * @static
             * @param {ecmaserve.trash.CardSpot} message CardSpot
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CardSpot.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.current = null;
                    object.faceDown = false;
                    object.isRequired = false;
                }
                if (message.current != null && message.hasOwnProperty("current"))
                    object.current = $root.ecmaserve.trash.Card.toObject(message.current, options);
                if (message.faceDown != null && message.hasOwnProperty("faceDown"))
                    object.faceDown = message.faceDown;
                if (message.isRequired != null && message.hasOwnProperty("isRequired"))
                    object.isRequired = message.isRequired;
                return object;
            };

            /**
             * Converts this CardSpot to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.CardSpot
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CardSpot.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CardSpot;
        })();

        trash.PlayerTableau = (function() {

            /**
             * Properties of a PlayerTableau.
             * @memberof ecmaserve.trash
             * @interface IPlayerTableau
             * @property {ecmaserve.trash.ICardSpot|null} [slot1] PlayerTableau slot1
             * @property {ecmaserve.trash.ICardSpot|null} [slot2] PlayerTableau slot2
             * @property {ecmaserve.trash.ICardSpot|null} [slot3] PlayerTableau slot3
             * @property {ecmaserve.trash.ICardSpot|null} [slot4] PlayerTableau slot4
             * @property {ecmaserve.trash.ICardSpot|null} [slot5] PlayerTableau slot5
             * @property {ecmaserve.trash.ICardSpot|null} [slot6] PlayerTableau slot6
             * @property {ecmaserve.trash.ICardSpot|null} [slot7] PlayerTableau slot7
             * @property {ecmaserve.trash.ICardSpot|null} [slot8] PlayerTableau slot8
             * @property {ecmaserve.trash.ICardSpot|null} [slot9] PlayerTableau slot9
             * @property {ecmaserve.trash.ICardSpot|null} [slot10] PlayerTableau slot10
             * @property {string|null} [playerId] PlayerTableau playerId
             * @property {ecmaserve.trash.ICard|null} [cardInHand] PlayerTableau cardInHand
             */

            /**
             * Constructs a new PlayerTableau.
             * @memberof ecmaserve.trash
             * @classdesc Represents a PlayerTableau.
             * @implements IPlayerTableau
             * @constructor
             * @param {ecmaserve.trash.IPlayerTableau=} [properties] Properties to set
             */
            function PlayerTableau(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PlayerTableau slot1.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot1
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot1 = null;

            /**
             * PlayerTableau slot2.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot2
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot2 = null;

            /**
             * PlayerTableau slot3.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot3
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot3 = null;

            /**
             * PlayerTableau slot4.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot4
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot4 = null;

            /**
             * PlayerTableau slot5.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot5
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot5 = null;

            /**
             * PlayerTableau slot6.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot6
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot6 = null;

            /**
             * PlayerTableau slot7.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot7
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot7 = null;

            /**
             * PlayerTableau slot8.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot8
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot8 = null;

            /**
             * PlayerTableau slot9.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot9
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot9 = null;

            /**
             * PlayerTableau slot10.
             * @member {ecmaserve.trash.ICardSpot|null|undefined} slot10
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.slot10 = null;

            /**
             * PlayerTableau playerId.
             * @member {string} playerId
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.playerId = "";

            /**
             * PlayerTableau cardInHand.
             * @member {ecmaserve.trash.ICard|null|undefined} cardInHand
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             */
            PlayerTableau.prototype.cardInHand = null;

            /**
             * Creates a new PlayerTableau instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.PlayerTableau
             * @static
             * @param {ecmaserve.trash.IPlayerTableau=} [properties] Properties to set
             * @returns {ecmaserve.trash.PlayerTableau} PlayerTableau instance
             */
            PlayerTableau.create = function create(properties) {
                return new PlayerTableau(properties);
            };

            /**
             * Encodes the specified PlayerTableau message. Does not implicitly {@link ecmaserve.trash.PlayerTableau.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.PlayerTableau
             * @static
             * @param {ecmaserve.trash.IPlayerTableau} message PlayerTableau message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerTableau.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.slot1 != null && Object.hasOwnProperty.call(message, "slot1"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.slot2 != null && Object.hasOwnProperty.call(message, "slot2"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.slot3 != null && Object.hasOwnProperty.call(message, "slot3"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot3, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.slot4 != null && Object.hasOwnProperty.call(message, "slot4"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot4, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.slot5 != null && Object.hasOwnProperty.call(message, "slot5"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot5, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.slot6 != null && Object.hasOwnProperty.call(message, "slot6"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot6, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.slot7 != null && Object.hasOwnProperty.call(message, "slot7"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot7, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.slot8 != null && Object.hasOwnProperty.call(message, "slot8"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot8, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.slot9 != null && Object.hasOwnProperty.call(message, "slot9"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot9, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.slot10 != null && Object.hasOwnProperty.call(message, "slot10"))
                    $root.ecmaserve.trash.CardSpot.encode(message.slot10, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                    writer.uint32(/* id 20, wireType 2 =*/162).string(message.playerId);
                if (message.cardInHand != null && Object.hasOwnProperty.call(message, "cardInHand"))
                    $root.ecmaserve.trash.Card.encode(message.cardInHand, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PlayerTableau message, length delimited. Does not implicitly {@link ecmaserve.trash.PlayerTableau.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.PlayerTableau
             * @static
             * @param {ecmaserve.trash.IPlayerTableau} message PlayerTableau message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PlayerTableau.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PlayerTableau message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.PlayerTableau
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.PlayerTableau} PlayerTableau
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerTableau.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.PlayerTableau();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.slot1 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.slot2 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.slot3 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.slot4 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.slot5 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.slot6 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.slot7 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.slot8 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.slot9 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.slot10 = $root.ecmaserve.trash.CardSpot.decode(reader, reader.uint32());
                        break;
                    case 20:
                        message.playerId = reader.string();
                        break;
                    case 22:
                        message.cardInHand = $root.ecmaserve.trash.Card.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PlayerTableau message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.PlayerTableau
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.PlayerTableau} PlayerTableau
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PlayerTableau.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PlayerTableau message.
             * @function verify
             * @memberof ecmaserve.trash.PlayerTableau
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PlayerTableau.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.slot1 != null && message.hasOwnProperty("slot1")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot1);
                    if (error)
                        return "slot1." + error;
                }
                if (message.slot2 != null && message.hasOwnProperty("slot2")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot2);
                    if (error)
                        return "slot2." + error;
                }
                if (message.slot3 != null && message.hasOwnProperty("slot3")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot3);
                    if (error)
                        return "slot3." + error;
                }
                if (message.slot4 != null && message.hasOwnProperty("slot4")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot4);
                    if (error)
                        return "slot4." + error;
                }
                if (message.slot5 != null && message.hasOwnProperty("slot5")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot5);
                    if (error)
                        return "slot5." + error;
                }
                if (message.slot6 != null && message.hasOwnProperty("slot6")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot6);
                    if (error)
                        return "slot6." + error;
                }
                if (message.slot7 != null && message.hasOwnProperty("slot7")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot7);
                    if (error)
                        return "slot7." + error;
                }
                if (message.slot8 != null && message.hasOwnProperty("slot8")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot8);
                    if (error)
                        return "slot8." + error;
                }
                if (message.slot9 != null && message.hasOwnProperty("slot9")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot9);
                    if (error)
                        return "slot9." + error;
                }
                if (message.slot10 != null && message.hasOwnProperty("slot10")) {
                    var error = $root.ecmaserve.trash.CardSpot.verify(message.slot10);
                    if (error)
                        return "slot10." + error;
                }
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    if (!$util.isString(message.playerId))
                        return "playerId: string expected";
                if (message.cardInHand != null && message.hasOwnProperty("cardInHand")) {
                    var error = $root.ecmaserve.trash.Card.verify(message.cardInHand);
                    if (error)
                        return "cardInHand." + error;
                }
                return null;
            };

            /**
             * Creates a PlayerTableau message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.PlayerTableau
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.PlayerTableau} PlayerTableau
             */
            PlayerTableau.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.PlayerTableau)
                    return object;
                var message = new $root.ecmaserve.trash.PlayerTableau();
                if (object.slot1 != null) {
                    if (typeof object.slot1 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot1: object expected");
                    message.slot1 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot1);
                }
                if (object.slot2 != null) {
                    if (typeof object.slot2 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot2: object expected");
                    message.slot2 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot2);
                }
                if (object.slot3 != null) {
                    if (typeof object.slot3 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot3: object expected");
                    message.slot3 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot3);
                }
                if (object.slot4 != null) {
                    if (typeof object.slot4 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot4: object expected");
                    message.slot4 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot4);
                }
                if (object.slot5 != null) {
                    if (typeof object.slot5 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot5: object expected");
                    message.slot5 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot5);
                }
                if (object.slot6 != null) {
                    if (typeof object.slot6 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot6: object expected");
                    message.slot6 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot6);
                }
                if (object.slot7 != null) {
                    if (typeof object.slot7 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot7: object expected");
                    message.slot7 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot7);
                }
                if (object.slot8 != null) {
                    if (typeof object.slot8 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot8: object expected");
                    message.slot8 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot8);
                }
                if (object.slot9 != null) {
                    if (typeof object.slot9 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot9: object expected");
                    message.slot9 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot9);
                }
                if (object.slot10 != null) {
                    if (typeof object.slot10 !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.slot10: object expected");
                    message.slot10 = $root.ecmaserve.trash.CardSpot.fromObject(object.slot10);
                }
                if (object.playerId != null)
                    message.playerId = String(object.playerId);
                if (object.cardInHand != null) {
                    if (typeof object.cardInHand !== "object")
                        throw TypeError(".ecmaserve.trash.PlayerTableau.cardInHand: object expected");
                    message.cardInHand = $root.ecmaserve.trash.Card.fromObject(object.cardInHand);
                }
                return message;
            };

            /**
             * Creates a plain object from a PlayerTableau message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.PlayerTableau
             * @static
             * @param {ecmaserve.trash.PlayerTableau} message PlayerTableau
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PlayerTableau.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.slot1 = null;
                    object.slot2 = null;
                    object.slot3 = null;
                    object.slot4 = null;
                    object.slot5 = null;
                    object.slot6 = null;
                    object.slot7 = null;
                    object.slot8 = null;
                    object.slot9 = null;
                    object.slot10 = null;
                    object.playerId = "";
                    object.cardInHand = null;
                }
                if (message.slot1 != null && message.hasOwnProperty("slot1"))
                    object.slot1 = $root.ecmaserve.trash.CardSpot.toObject(message.slot1, options);
                if (message.slot2 != null && message.hasOwnProperty("slot2"))
                    object.slot2 = $root.ecmaserve.trash.CardSpot.toObject(message.slot2, options);
                if (message.slot3 != null && message.hasOwnProperty("slot3"))
                    object.slot3 = $root.ecmaserve.trash.CardSpot.toObject(message.slot3, options);
                if (message.slot4 != null && message.hasOwnProperty("slot4"))
                    object.slot4 = $root.ecmaserve.trash.CardSpot.toObject(message.slot4, options);
                if (message.slot5 != null && message.hasOwnProperty("slot5"))
                    object.slot5 = $root.ecmaserve.trash.CardSpot.toObject(message.slot5, options);
                if (message.slot6 != null && message.hasOwnProperty("slot6"))
                    object.slot6 = $root.ecmaserve.trash.CardSpot.toObject(message.slot6, options);
                if (message.slot7 != null && message.hasOwnProperty("slot7"))
                    object.slot7 = $root.ecmaserve.trash.CardSpot.toObject(message.slot7, options);
                if (message.slot8 != null && message.hasOwnProperty("slot8"))
                    object.slot8 = $root.ecmaserve.trash.CardSpot.toObject(message.slot8, options);
                if (message.slot9 != null && message.hasOwnProperty("slot9"))
                    object.slot9 = $root.ecmaserve.trash.CardSpot.toObject(message.slot9, options);
                if (message.slot10 != null && message.hasOwnProperty("slot10"))
                    object.slot10 = $root.ecmaserve.trash.CardSpot.toObject(message.slot10, options);
                if (message.playerId != null && message.hasOwnProperty("playerId"))
                    object.playerId = message.playerId;
                if (message.cardInHand != null && message.hasOwnProperty("cardInHand"))
                    object.cardInHand = $root.ecmaserve.trash.Card.toObject(message.cardInHand, options);
                return object;
            };

            /**
             * Converts this PlayerTableau to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.PlayerTableau
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PlayerTableau.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PlayerTableau;
        })();

        trash.State = (function() {

            /**
             * Properties of a State.
             * @memberof ecmaserve.trash
             * @interface IState
             * @property {ecmaserve.trash.IDeck|null} [deck] State deck
             * @property {ecmaserve.trash.IDrawPile|null} [drawPile] State drawPile
             * @property {ecmaserve.trash.IDiscardPile|null} [discardPile] State discardPile
             * @property {Array.<string>|null} [playerIds] State playerIds
             * @property {boolean|null} [gameStarted] State gameStarted
             * @property {string|null} [currentPlayerId] State currentPlayerId
             * @property {Array.<ecmaserve.trash.IPlayerTableau>|null} [tableaus] State tableaus
             */

            /**
             * Constructs a new State.
             * @memberof ecmaserve.trash
             * @classdesc Represents a State.
             * @implements IState
             * @constructor
             * @param {ecmaserve.trash.IState=} [properties] Properties to set
             */
            function State(properties) {
                this.playerIds = [];
                this.tableaus = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * State deck.
             * @member {ecmaserve.trash.IDeck|null|undefined} deck
             * @memberof ecmaserve.trash.State
             * @instance
             */
            State.prototype.deck = null;

            /**
             * State drawPile.
             * @member {ecmaserve.trash.IDrawPile|null|undefined} drawPile
             * @memberof ecmaserve.trash.State
             * @instance
             */
            State.prototype.drawPile = null;

            /**
             * State discardPile.
             * @member {ecmaserve.trash.IDiscardPile|null|undefined} discardPile
             * @memberof ecmaserve.trash.State
             * @instance
             */
            State.prototype.discardPile = null;

            /**
             * State playerIds.
             * @member {Array.<string>} playerIds
             * @memberof ecmaserve.trash.State
             * @instance
             */
            State.prototype.playerIds = $util.emptyArray;

            /**
             * State gameStarted.
             * @member {boolean} gameStarted
             * @memberof ecmaserve.trash.State
             * @instance
             */
            State.prototype.gameStarted = false;

            /**
             * State currentPlayerId.
             * @member {string} currentPlayerId
             * @memberof ecmaserve.trash.State
             * @instance
             */
            State.prototype.currentPlayerId = "";

            /**
             * State tableaus.
             * @member {Array.<ecmaserve.trash.IPlayerTableau>} tableaus
             * @memberof ecmaserve.trash.State
             * @instance
             */
            State.prototype.tableaus = $util.emptyArray;

            /**
             * Creates a new State instance using the specified properties.
             * @function create
             * @memberof ecmaserve.trash.State
             * @static
             * @param {ecmaserve.trash.IState=} [properties] Properties to set
             * @returns {ecmaserve.trash.State} State instance
             */
            State.create = function create(properties) {
                return new State(properties);
            };

            /**
             * Encodes the specified State message. Does not implicitly {@link ecmaserve.trash.State.verify|verify} messages.
             * @function encode
             * @memberof ecmaserve.trash.State
             * @static
             * @param {ecmaserve.trash.IState} message State message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            State.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deck != null && Object.hasOwnProperty.call(message, "deck"))
                    $root.ecmaserve.trash.Deck.encode(message.deck, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.drawPile != null && Object.hasOwnProperty.call(message, "drawPile"))
                    $root.ecmaserve.trash.DrawPile.encode(message.drawPile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.discardPile != null && Object.hasOwnProperty.call(message, "discardPile"))
                    $root.ecmaserve.trash.DiscardPile.encode(message.discardPile, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.playerIds != null && message.playerIds.length)
                    for (var i = 0; i < message.playerIds.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.playerIds[i]);
                if (message.gameStarted != null && Object.hasOwnProperty.call(message, "gameStarted"))
                    writer.uint32(/* id 15, wireType 0 =*/120).bool(message.gameStarted);
                if (message.currentPlayerId != null && Object.hasOwnProperty.call(message, "currentPlayerId"))
                    writer.uint32(/* id 20, wireType 2 =*/162).string(message.currentPlayerId);
                if (message.tableaus != null && message.tableaus.length)
                    for (var i = 0; i < message.tableaus.length; ++i)
                        $root.ecmaserve.trash.PlayerTableau.encode(message.tableaus[i], writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link ecmaserve.trash.State.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ecmaserve.trash.State
             * @static
             * @param {ecmaserve.trash.IState} message State message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            State.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a State message from the specified reader or buffer.
             * @function decode
             * @memberof ecmaserve.trash.State
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ecmaserve.trash.State} State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            State.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ecmaserve.trash.State();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deck = $root.ecmaserve.trash.Deck.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.drawPile = $root.ecmaserve.trash.DrawPile.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.discardPile = $root.ecmaserve.trash.DiscardPile.decode(reader, reader.uint32());
                        break;
                    case 10:
                        if (!(message.playerIds && message.playerIds.length))
                            message.playerIds = [];
                        message.playerIds.push(reader.string());
                        break;
                    case 15:
                        message.gameStarted = reader.bool();
                        break;
                    case 20:
                        message.currentPlayerId = reader.string();
                        break;
                    case 30:
                        if (!(message.tableaus && message.tableaus.length))
                            message.tableaus = [];
                        message.tableaus.push($root.ecmaserve.trash.PlayerTableau.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a State message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ecmaserve.trash.State
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ecmaserve.trash.State} State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            State.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a State message.
             * @function verify
             * @memberof ecmaserve.trash.State
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            State.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deck != null && message.hasOwnProperty("deck")) {
                    var error = $root.ecmaserve.trash.Deck.verify(message.deck);
                    if (error)
                        return "deck." + error;
                }
                if (message.drawPile != null && message.hasOwnProperty("drawPile")) {
                    var error = $root.ecmaserve.trash.DrawPile.verify(message.drawPile);
                    if (error)
                        return "drawPile." + error;
                }
                if (message.discardPile != null && message.hasOwnProperty("discardPile")) {
                    var error = $root.ecmaserve.trash.DiscardPile.verify(message.discardPile);
                    if (error)
                        return "discardPile." + error;
                }
                if (message.playerIds != null && message.hasOwnProperty("playerIds")) {
                    if (!Array.isArray(message.playerIds))
                        return "playerIds: array expected";
                    for (var i = 0; i < message.playerIds.length; ++i)
                        if (!$util.isString(message.playerIds[i]))
                            return "playerIds: string[] expected";
                }
                if (message.gameStarted != null && message.hasOwnProperty("gameStarted"))
                    if (typeof message.gameStarted !== "boolean")
                        return "gameStarted: boolean expected";
                if (message.currentPlayerId != null && message.hasOwnProperty("currentPlayerId"))
                    if (!$util.isString(message.currentPlayerId))
                        return "currentPlayerId: string expected";
                if (message.tableaus != null && message.hasOwnProperty("tableaus")) {
                    if (!Array.isArray(message.tableaus))
                        return "tableaus: array expected";
                    for (var i = 0; i < message.tableaus.length; ++i) {
                        var error = $root.ecmaserve.trash.PlayerTableau.verify(message.tableaus[i]);
                        if (error)
                            return "tableaus." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ecmaserve.trash.State
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ecmaserve.trash.State} State
             */
            State.fromObject = function fromObject(object) {
                if (object instanceof $root.ecmaserve.trash.State)
                    return object;
                var message = new $root.ecmaserve.trash.State();
                if (object.deck != null) {
                    if (typeof object.deck !== "object")
                        throw TypeError(".ecmaserve.trash.State.deck: object expected");
                    message.deck = $root.ecmaserve.trash.Deck.fromObject(object.deck);
                }
                if (object.drawPile != null) {
                    if (typeof object.drawPile !== "object")
                        throw TypeError(".ecmaserve.trash.State.drawPile: object expected");
                    message.drawPile = $root.ecmaserve.trash.DrawPile.fromObject(object.drawPile);
                }
                if (object.discardPile != null) {
                    if (typeof object.discardPile !== "object")
                        throw TypeError(".ecmaserve.trash.State.discardPile: object expected");
                    message.discardPile = $root.ecmaserve.trash.DiscardPile.fromObject(object.discardPile);
                }
                if (object.playerIds) {
                    if (!Array.isArray(object.playerIds))
                        throw TypeError(".ecmaserve.trash.State.playerIds: array expected");
                    message.playerIds = [];
                    for (var i = 0; i < object.playerIds.length; ++i)
                        message.playerIds[i] = String(object.playerIds[i]);
                }
                if (object.gameStarted != null)
                    message.gameStarted = Boolean(object.gameStarted);
                if (object.currentPlayerId != null)
                    message.currentPlayerId = String(object.currentPlayerId);
                if (object.tableaus) {
                    if (!Array.isArray(object.tableaus))
                        throw TypeError(".ecmaserve.trash.State.tableaus: array expected");
                    message.tableaus = [];
                    for (var i = 0; i < object.tableaus.length; ++i) {
                        if (typeof object.tableaus[i] !== "object")
                            throw TypeError(".ecmaserve.trash.State.tableaus: object expected");
                        message.tableaus[i] = $root.ecmaserve.trash.PlayerTableau.fromObject(object.tableaus[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ecmaserve.trash.State
             * @static
             * @param {ecmaserve.trash.State} message State
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            State.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.playerIds = [];
                    object.tableaus = [];
                }
                if (options.defaults) {
                    object.deck = null;
                    object.drawPile = null;
                    object.discardPile = null;
                    object.gameStarted = false;
                    object.currentPlayerId = "";
                }
                if (message.deck != null && message.hasOwnProperty("deck"))
                    object.deck = $root.ecmaserve.trash.Deck.toObject(message.deck, options);
                if (message.drawPile != null && message.hasOwnProperty("drawPile"))
                    object.drawPile = $root.ecmaserve.trash.DrawPile.toObject(message.drawPile, options);
                if (message.discardPile != null && message.hasOwnProperty("discardPile"))
                    object.discardPile = $root.ecmaserve.trash.DiscardPile.toObject(message.discardPile, options);
                if (message.playerIds && message.playerIds.length) {
                    object.playerIds = [];
                    for (var j = 0; j < message.playerIds.length; ++j)
                        object.playerIds[j] = message.playerIds[j];
                }
                if (message.gameStarted != null && message.hasOwnProperty("gameStarted"))
                    object.gameStarted = message.gameStarted;
                if (message.currentPlayerId != null && message.hasOwnProperty("currentPlayerId"))
                    object.currentPlayerId = message.currentPlayerId;
                if (message.tableaus && message.tableaus.length) {
                    object.tableaus = [];
                    for (var j = 0; j < message.tableaus.length; ++j)
                        object.tableaus[j] = $root.ecmaserve.trash.PlayerTableau.toObject(message.tableaus[j], options);
                }
                return object;
            };

            /**
             * Converts this State to JSON.
             * @function toJSON
             * @memberof ecmaserve.trash.State
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            State.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return State;
        })();

        return trash;
    })();

    return ecmaserve;
})();

module.exports = $root;
