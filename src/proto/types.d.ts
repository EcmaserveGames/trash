import * as $protobuf from "protobufjs";
/** Namespace ecmaserve. */
export namespace ecmaserve {

    /** Namespace trash. */
    namespace trash {

        /** Properties of a StartGame. */
        interface IStartGame {
        }

        /** Represents a StartGame. */
        class StartGame implements IStartGame {

            /**
             * Constructs a new StartGame.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IStartGame);

            /**
             * Creates a new StartGame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartGame instance
             */
            public static create(properties?: ecmaserve.trash.IStartGame): ecmaserve.trash.StartGame;

            /**
             * Encodes the specified StartGame message. Does not implicitly {@link ecmaserve.trash.StartGame.verify|verify} messages.
             * @param message StartGame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartGame message, length delimited. Does not implicitly {@link ecmaserve.trash.StartGame.verify|verify} messages.
             * @param message StartGame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartGame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.StartGame;

            /**
             * Decodes a StartGame message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.StartGame;

            /**
             * Verifies a StartGame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartGame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartGame
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.StartGame;

            /**
             * Creates a plain object from a StartGame message. Also converts values to other types if specified.
             * @param message StartGame
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.StartGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartGame to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JoinGame. */
        interface IJoinGame {
        }

        /** Represents a JoinGame. */
        class JoinGame implements IJoinGame {

            /**
             * Constructs a new JoinGame.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IJoinGame);

            /**
             * Creates a new JoinGame instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinGame instance
             */
            public static create(properties?: ecmaserve.trash.IJoinGame): ecmaserve.trash.JoinGame;

            /**
             * Encodes the specified JoinGame message. Does not implicitly {@link ecmaserve.trash.JoinGame.verify|verify} messages.
             * @param message JoinGame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinGame message, length delimited. Does not implicitly {@link ecmaserve.trash.JoinGame.verify|verify} messages.
             * @param message JoinGame message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IJoinGame, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinGame message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.JoinGame;

            /**
             * Decodes a JoinGame message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinGame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.JoinGame;

            /**
             * Verifies a JoinGame message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinGame message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinGame
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.JoinGame;

            /**
             * Creates a plain object from a JoinGame message. Also converts values to other types if specified.
             * @param message JoinGame
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.JoinGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinGame to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** CardSource enum. */
        enum CardSource {
            discard = 1,
            draw = 2
        }

        /** Properties of a DrawCard. */
        interface IDrawCard {

            /** DrawCard source */
            source?: (ecmaserve.trash.CardSource|null);
        }

        /** Represents a DrawCard. */
        class DrawCard implements IDrawCard {

            /**
             * Constructs a new DrawCard.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IDrawCard);

            /** DrawCard source. */
            public source: ecmaserve.trash.CardSource;

            /**
             * Creates a new DrawCard instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DrawCard instance
             */
            public static create(properties?: ecmaserve.trash.IDrawCard): ecmaserve.trash.DrawCard;

            /**
             * Encodes the specified DrawCard message. Does not implicitly {@link ecmaserve.trash.DrawCard.verify|verify} messages.
             * @param message DrawCard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IDrawCard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DrawCard message, length delimited. Does not implicitly {@link ecmaserve.trash.DrawCard.verify|verify} messages.
             * @param message DrawCard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IDrawCard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DrawCard message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DrawCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.DrawCard;

            /**
             * Decodes a DrawCard message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DrawCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.DrawCard;

            /**
             * Verifies a DrawCard message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DrawCard message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DrawCard
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.DrawCard;

            /**
             * Creates a plain object from a DrawCard message. Also converts values to other types if specified.
             * @param message DrawCard
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.DrawCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DrawCard to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** SlotNumber enum. */
        enum SlotNumber {
            slot1 = 1,
            slot2 = 2,
            slot3 = 3,
            slot4 = 4,
            slot5 = 5,
            slot6 = 6,
            slot7 = 7,
            slot8 = 8,
            slot9 = 9,
            slot10 = 10
        }

        /** Properties of a ReplaceCard. */
        interface IReplaceCard {

            /** ReplaceCard slot */
            slot?: (ecmaserve.trash.SlotNumber|null);
        }

        /** Represents a ReplaceCard. */
        class ReplaceCard implements IReplaceCard {

            /**
             * Constructs a new ReplaceCard.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IReplaceCard);

            /** ReplaceCard slot. */
            public slot: ecmaserve.trash.SlotNumber;

            /**
             * Creates a new ReplaceCard instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReplaceCard instance
             */
            public static create(properties?: ecmaserve.trash.IReplaceCard): ecmaserve.trash.ReplaceCard;

            /**
             * Encodes the specified ReplaceCard message. Does not implicitly {@link ecmaserve.trash.ReplaceCard.verify|verify} messages.
             * @param message ReplaceCard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IReplaceCard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReplaceCard message, length delimited. Does not implicitly {@link ecmaserve.trash.ReplaceCard.verify|verify} messages.
             * @param message ReplaceCard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IReplaceCard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReplaceCard message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReplaceCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.ReplaceCard;

            /**
             * Decodes a ReplaceCard message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReplaceCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.ReplaceCard;

            /**
             * Verifies a ReplaceCard message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReplaceCard message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReplaceCard
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.ReplaceCard;

            /**
             * Creates a plain object from a ReplaceCard message. Also converts values to other types if specified.
             * @param message ReplaceCard
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.ReplaceCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReplaceCard to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DiscardCard. */
        interface IDiscardCard {
        }

        /** Represents a DiscardCard. */
        class DiscardCard implements IDiscardCard {

            /**
             * Constructs a new DiscardCard.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IDiscardCard);

            /**
             * Creates a new DiscardCard instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscardCard instance
             */
            public static create(properties?: ecmaserve.trash.IDiscardCard): ecmaserve.trash.DiscardCard;

            /**
             * Encodes the specified DiscardCard message. Does not implicitly {@link ecmaserve.trash.DiscardCard.verify|verify} messages.
             * @param message DiscardCard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IDiscardCard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscardCard message, length delimited. Does not implicitly {@link ecmaserve.trash.DiscardCard.verify|verify} messages.
             * @param message DiscardCard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IDiscardCard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscardCard message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscardCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.DiscardCard;

            /**
             * Decodes a DiscardCard message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscardCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.DiscardCard;

            /**
             * Verifies a DiscardCard message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscardCard message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscardCard
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.DiscardCard;

            /**
             * Creates a plain object from a DiscardCard message. Also converts values to other types if specified.
             * @param message DiscardCard
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.DiscardCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscardCard to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Actions. */
        interface IActions {

            /** Actions draw */
            draw?: (ecmaserve.trash.IDrawCard|null);

            /** Actions replace */
            replace?: (ecmaserve.trash.IReplaceCard|null);

            /** Actions start */
            start?: (ecmaserve.trash.IStartGame|null);

            /** Actions join */
            join?: (ecmaserve.trash.IJoinGame|null);

            /** Actions discard */
            discard?: (ecmaserve.trash.IDiscardCard|null);
        }

        /** Represents an Actions. */
        class Actions implements IActions {

            /**
             * Constructs a new Actions.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IActions);

            /** Actions draw. */
            public draw?: (ecmaserve.trash.IDrawCard|null);

            /** Actions replace. */
            public replace?: (ecmaserve.trash.IReplaceCard|null);

            /** Actions start. */
            public start?: (ecmaserve.trash.IStartGame|null);

            /** Actions join. */
            public join?: (ecmaserve.trash.IJoinGame|null);

            /** Actions discard. */
            public discard?: (ecmaserve.trash.IDiscardCard|null);

            /** Actions Action. */
            public Action?: ("draw"|"replace"|"start"|"join"|"discard");

            /**
             * Creates a new Actions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Actions instance
             */
            public static create(properties?: ecmaserve.trash.IActions): ecmaserve.trash.Actions;

            /**
             * Encodes the specified Actions message. Does not implicitly {@link ecmaserve.trash.Actions.verify|verify} messages.
             * @param message Actions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IActions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Actions message, length delimited. Does not implicitly {@link ecmaserve.trash.Actions.verify|verify} messages.
             * @param message Actions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IActions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Actions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Actions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.Actions;

            /**
             * Decodes an Actions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Actions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.Actions;

            /**
             * Verifies an Actions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Actions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Actions
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.Actions;

            /**
             * Creates a plain object from an Actions message. Also converts values to other types if specified.
             * @param message Actions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.Actions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Actions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Suite enum. */
        enum Suite {
            HEARTS = 0,
            CLUBS = 1,
            SPADES = 2,
            DIAMONDS = 3
        }

        /** FaceValue enum. */
        enum FaceValue {
            Ace = 1,
            Two = 2,
            Three = 3,
            Four = 4,
            Five = 5,
            Six = 6,
            Seven = 7,
            Eight = 8,
            Nine = 9,
            Ten = 10,
            Jack = 11,
            Queen = 12,
            King = 13
        }

        /** Properties of a Card. */
        interface ICard {

            /** Card suite */
            suite?: (ecmaserve.trash.Suite|null);

            /** Card value */
            value?: (ecmaserve.trash.FaceValue|null);
        }

        /** Represents a Card. */
        class Card implements ICard {

            /**
             * Constructs a new Card.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.ICard);

            /** Card suite. */
            public suite: ecmaserve.trash.Suite;

            /** Card value. */
            public value: ecmaserve.trash.FaceValue;

            /**
             * Creates a new Card instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Card instance
             */
            public static create(properties?: ecmaserve.trash.ICard): ecmaserve.trash.Card;

            /**
             * Encodes the specified Card message. Does not implicitly {@link ecmaserve.trash.Card.verify|verify} messages.
             * @param message Card message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Card message, length delimited. Does not implicitly {@link ecmaserve.trash.Card.verify|verify} messages.
             * @param message Card message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Card message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Card
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.Card;

            /**
             * Decodes a Card message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Card
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.Card;

            /**
             * Verifies a Card message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Card message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Card
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.Card;

            /**
             * Creates a plain object from a Card message. Also converts values to other types if specified.
             * @param message Card
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Card to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Deck. */
        interface IDeck {

            /** Deck cards */
            cards?: (ecmaserve.trash.ICard[]|null);
        }

        /** Represents a Deck. */
        class Deck implements IDeck {

            /**
             * Constructs a new Deck.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IDeck);

            /** Deck cards. */
            public cards: ecmaserve.trash.ICard[];

            /**
             * Creates a new Deck instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Deck instance
             */
            public static create(properties?: ecmaserve.trash.IDeck): ecmaserve.trash.Deck;

            /**
             * Encodes the specified Deck message. Does not implicitly {@link ecmaserve.trash.Deck.verify|verify} messages.
             * @param message Deck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IDeck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Deck message, length delimited. Does not implicitly {@link ecmaserve.trash.Deck.verify|verify} messages.
             * @param message Deck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IDeck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Deck message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Deck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.Deck;

            /**
             * Decodes a Deck message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Deck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.Deck;

            /**
             * Verifies a Deck message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Deck message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Deck
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.Deck;

            /**
             * Creates a plain object from a Deck message. Also converts values to other types if specified.
             * @param message Deck
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.Deck, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Deck to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DiscardPile. */
        interface IDiscardPile {

            /** DiscardPile cards */
            cards?: (ecmaserve.trash.ICard[]|null);
        }

        /** Represents a DiscardPile. */
        class DiscardPile implements IDiscardPile {

            /**
             * Constructs a new DiscardPile.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IDiscardPile);

            /** DiscardPile cards. */
            public cards: ecmaserve.trash.ICard[];

            /**
             * Creates a new DiscardPile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscardPile instance
             */
            public static create(properties?: ecmaserve.trash.IDiscardPile): ecmaserve.trash.DiscardPile;

            /**
             * Encodes the specified DiscardPile message. Does not implicitly {@link ecmaserve.trash.DiscardPile.verify|verify} messages.
             * @param message DiscardPile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IDiscardPile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscardPile message, length delimited. Does not implicitly {@link ecmaserve.trash.DiscardPile.verify|verify} messages.
             * @param message DiscardPile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IDiscardPile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscardPile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscardPile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.DiscardPile;

            /**
             * Decodes a DiscardPile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscardPile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.DiscardPile;

            /**
             * Verifies a DiscardPile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscardPile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscardPile
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.DiscardPile;

            /**
             * Creates a plain object from a DiscardPile message. Also converts values to other types if specified.
             * @param message DiscardPile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.DiscardPile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscardPile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DrawPile. */
        interface IDrawPile {

            /** DrawPile cards */
            cards?: (ecmaserve.trash.ICard[]|null);
        }

        /** Represents a DrawPile. */
        class DrawPile implements IDrawPile {

            /**
             * Constructs a new DrawPile.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IDrawPile);

            /** DrawPile cards. */
            public cards: ecmaserve.trash.ICard[];

            /**
             * Creates a new DrawPile instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DrawPile instance
             */
            public static create(properties?: ecmaserve.trash.IDrawPile): ecmaserve.trash.DrawPile;

            /**
             * Encodes the specified DrawPile message. Does not implicitly {@link ecmaserve.trash.DrawPile.verify|verify} messages.
             * @param message DrawPile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IDrawPile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DrawPile message, length delimited. Does not implicitly {@link ecmaserve.trash.DrawPile.verify|verify} messages.
             * @param message DrawPile message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IDrawPile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DrawPile message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DrawPile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.DrawPile;

            /**
             * Decodes a DrawPile message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DrawPile
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.DrawPile;

            /**
             * Verifies a DrawPile message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DrawPile message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DrawPile
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.DrawPile;

            /**
             * Creates a plain object from a DrawPile message. Also converts values to other types if specified.
             * @param message DrawPile
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.DrawPile, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DrawPile to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CardSpot. */
        interface ICardSpot {

            /** CardSpot current */
            current?: (ecmaserve.trash.ICard|null);

            /** CardSpot faceDown */
            faceDown?: (boolean|null);

            /** CardSpot isRequired */
            isRequired?: (boolean|null);
        }

        /** Represents a CardSpot. */
        class CardSpot implements ICardSpot {

            /**
             * Constructs a new CardSpot.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.ICardSpot);

            /** CardSpot current. */
            public current?: (ecmaserve.trash.ICard|null);

            /** CardSpot faceDown. */
            public faceDown: boolean;

            /** CardSpot isRequired. */
            public isRequired: boolean;

            /**
             * Creates a new CardSpot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CardSpot instance
             */
            public static create(properties?: ecmaserve.trash.ICardSpot): ecmaserve.trash.CardSpot;

            /**
             * Encodes the specified CardSpot message. Does not implicitly {@link ecmaserve.trash.CardSpot.verify|verify} messages.
             * @param message CardSpot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.ICardSpot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CardSpot message, length delimited. Does not implicitly {@link ecmaserve.trash.CardSpot.verify|verify} messages.
             * @param message CardSpot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.ICardSpot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CardSpot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CardSpot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.CardSpot;

            /**
             * Decodes a CardSpot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CardSpot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.CardSpot;

            /**
             * Verifies a CardSpot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CardSpot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CardSpot
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.CardSpot;

            /**
             * Creates a plain object from a CardSpot message. Also converts values to other types if specified.
             * @param message CardSpot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.CardSpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CardSpot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PlayerTableau. */
        interface IPlayerTableau {

            /** PlayerTableau slot1 */
            slot1?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot2 */
            slot2?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot3 */
            slot3?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot4 */
            slot4?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot5 */
            slot5?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot6 */
            slot6?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot7 */
            slot7?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot8 */
            slot8?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot9 */
            slot9?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot10 */
            slot10?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau playerId */
            playerId?: (string|null);

            /** PlayerTableau cardInHand */
            cardInHand?: (ecmaserve.trash.ICard|null);
        }

        /** Represents a PlayerTableau. */
        class PlayerTableau implements IPlayerTableau {

            /**
             * Constructs a new PlayerTableau.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IPlayerTableau);

            /** PlayerTableau slot1. */
            public slot1?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot2. */
            public slot2?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot3. */
            public slot3?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot4. */
            public slot4?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot5. */
            public slot5?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot6. */
            public slot6?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot7. */
            public slot7?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot8. */
            public slot8?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot9. */
            public slot9?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau slot10. */
            public slot10?: (ecmaserve.trash.ICardSpot|null);

            /** PlayerTableau playerId. */
            public playerId: string;

            /** PlayerTableau cardInHand. */
            public cardInHand?: (ecmaserve.trash.ICard|null);

            /**
             * Creates a new PlayerTableau instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayerTableau instance
             */
            public static create(properties?: ecmaserve.trash.IPlayerTableau): ecmaserve.trash.PlayerTableau;

            /**
             * Encodes the specified PlayerTableau message. Does not implicitly {@link ecmaserve.trash.PlayerTableau.verify|verify} messages.
             * @param message PlayerTableau message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IPlayerTableau, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayerTableau message, length delimited. Does not implicitly {@link ecmaserve.trash.PlayerTableau.verify|verify} messages.
             * @param message PlayerTableau message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IPlayerTableau, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayerTableau message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayerTableau
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.PlayerTableau;

            /**
             * Decodes a PlayerTableau message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayerTableau
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.PlayerTableau;

            /**
             * Verifies a PlayerTableau message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayerTableau message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayerTableau
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.PlayerTableau;

            /**
             * Creates a plain object from a PlayerTableau message. Also converts values to other types if specified.
             * @param message PlayerTableau
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.PlayerTableau, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayerTableau to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a State. */
        interface IState {

            /** State deck */
            deck?: (ecmaserve.trash.IDeck|null);

            /** State drawPile */
            drawPile?: (ecmaserve.trash.IDrawPile|null);

            /** State discardPile */
            discardPile?: (ecmaserve.trash.IDiscardPile|null);

            /** State playerIds */
            playerIds?: (string[]|null);

            /** State gameStarted */
            gameStarted?: (boolean|null);

            /** State currentPlayerId */
            currentPlayerId?: (string|null);

            /** State tableaus */
            tableaus?: (ecmaserve.trash.IPlayerTableau[]|null);
        }

        /** Represents a State. */
        class State implements IState {

            /**
             * Constructs a new State.
             * @param [properties] Properties to set
             */
            constructor(properties?: ecmaserve.trash.IState);

            /** State deck. */
            public deck?: (ecmaserve.trash.IDeck|null);

            /** State drawPile. */
            public drawPile?: (ecmaserve.trash.IDrawPile|null);

            /** State discardPile. */
            public discardPile?: (ecmaserve.trash.IDiscardPile|null);

            /** State playerIds. */
            public playerIds: string[];

            /** State gameStarted. */
            public gameStarted: boolean;

            /** State currentPlayerId. */
            public currentPlayerId: string;

            /** State tableaus. */
            public tableaus: ecmaserve.trash.IPlayerTableau[];

            /**
             * Creates a new State instance using the specified properties.
             * @param [properties] Properties to set
             * @returns State instance
             */
            public static create(properties?: ecmaserve.trash.IState): ecmaserve.trash.State;

            /**
             * Encodes the specified State message. Does not implicitly {@link ecmaserve.trash.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ecmaserve.trash.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link ecmaserve.trash.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ecmaserve.trash.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a State message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ecmaserve.trash.State;

            /**
             * Decodes a State message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ecmaserve.trash.State;

            /**
             * Verifies a State message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns State
             */
            public static fromObject(object: { [k: string]: any }): ecmaserve.trash.State;

            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @param message State
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ecmaserve.trash.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this State to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
