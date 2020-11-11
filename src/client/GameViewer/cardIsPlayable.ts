import * as Proto from '../../proto/types'

const SlotNumber = Proto.ecmaserve.trash.SlotNumber

export function cardIsPlayable(
  slotNumber: Proto.ecmaserve.trash.SlotNumber,
  card: Proto.ecmaserve.trash.ICard
) {
  switch (card.value) {
    case Proto.ecmaserve.trash.FaceValue.Ace:
      return slotNumber === SlotNumber.slot1
    case Proto.ecmaserve.trash.FaceValue.Two:
      return slotNumber === SlotNumber.slot2
    case Proto.ecmaserve.trash.FaceValue.Three:
      return slotNumber === SlotNumber.slot3
    case Proto.ecmaserve.trash.FaceValue.Four:
      return slotNumber === SlotNumber.slot4
    case Proto.ecmaserve.trash.FaceValue.Five:
      return slotNumber === SlotNumber.slot5
    case Proto.ecmaserve.trash.FaceValue.Six:
      return slotNumber === SlotNumber.slot6
    case Proto.ecmaserve.trash.FaceValue.Seven:
      return slotNumber === SlotNumber.slot7
    case Proto.ecmaserve.trash.FaceValue.Eight:
      return slotNumber === SlotNumber.slot8
    case Proto.ecmaserve.trash.FaceValue.Nine:
      return slotNumber === SlotNumber.slot9
    case Proto.ecmaserve.trash.FaceValue.Ten:
      return slotNumber === SlotNumber.slot10
    case Proto.ecmaserve.trash.FaceValue.Jack:
      return true
    default:
      return false
  }
}
