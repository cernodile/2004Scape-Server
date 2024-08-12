import MessageEncoder from '#lostcity/network/outgoing/codec/MessageEncoder.js';
import OutgoingMessage from '#lostcity/network/outgoing/OutgoingMessage.js';
import PlayerInfo from '#lostcity/network/outgoing/model/PlayerInfo.js';
import PlayerInfoEncoder from '#lostcity/network/225/outgoing/codec/PlayerInfoEncoder.js';
import RebuildNormal from '#lostcity/network/outgoing/model/RebuildNormal.js';
import RebuildNormalEncoder from '#lostcity/network/225/outgoing/codec/RebuildNormalEncoder.js';
import DataLand from '#lostcity/network/outgoing/model/DataLand.js';
import DataLandEncoder from '#lostcity/network/225/outgoing/codec/DataLandEncoder.js';
import DataLandDone from '#lostcity/network/outgoing/model/DataLandDone.js';
import DataLandDoneEncoder from '#lostcity/network/225/outgoing/codec/DataLandDoneEncoder.js';
import DataLoc from '#lostcity/network/outgoing/model/DataLoc.js';
import DataLocEncoder from '#lostcity/network/225/outgoing/codec/DataLocEncoder.js';
import DataLocDone from '#lostcity/network/outgoing/model/DataLocDone.js';
import DataLocDoneEncoder from '#lostcity/network/225/outgoing/codec/DataLocDoneEncoder.js';
import CamLookAt from '#lostcity/network/outgoing/model/CamLookAt.js';
import CamLookAtEncoder from '#lostcity/network/225/outgoing/codec/CamLookAtEncoder.js';
import CamMoveTo from '#lostcity/network/outgoing/model/CamMoveTo.js';
import CamMoveToEncoder from '#lostcity/network/225/outgoing/codec/CamMoveToEncoder.js';
import CamReset from '#lostcity/network/outgoing/model/CamReset.js';
import CamResetEncoder from '#lostcity/network/225/outgoing/codec/CamResetEncoder.js';
import CamShake from '#lostcity/network/outgoing/model/CamShake.js';
import CamShakeEncoder from '#lostcity/network/225/outgoing/codec/CamShakeEncoder.js';
import ChatFilterSettings from '#lostcity/network/outgoing/model/ChatFilterSettings.js';
import ChatFilterSettingsEncoder from '#lostcity/network/225/outgoing/codec/ChatFilterSettingsEncoder.js';
import EnableTracking from '#lostcity/network/outgoing/model/EnableTracking.js';
import EnableTrackingEncoder from '#lostcity/network/225/outgoing/codec/EnableTrackingEncoder.js';
import FinishTracking from '#lostcity/network/outgoing/model/FinishTracking.js';
import FinishTrackingEncoder from '#lostcity/network/225/outgoing/codec/FinishTrackingEncoder.js';
import HintArrow from '#lostcity/network/outgoing/model/HintArrow.js';
import HintArrowEncoder from '#lostcity/network/225/outgoing/codec/HintArrowEncoder.js';
import IfClose from '#lostcity/network/outgoing/model/IfClose.js';
import IfCloseEncoder from '#lostcity/network/225/outgoing/codec/IfCloseEncoder.js';
import IfOpenChat from '#lostcity/network/outgoing/model/IfOpenChat.js';
import IfOpenChatEncoder from '#lostcity/network/225/outgoing/codec/IfOpenChatEncoder.js';
import IfOpenMain from '#lostcity/network/outgoing/model/IfOpenMain.js';
import IfOpenMainEncoder from '#lostcity/network/225/outgoing/codec/IfOpenMainEncoder.js';
import IfOpenMainSide from '#lostcity/network/outgoing/model/IfOpenMainSide.js';
import IfOpenMainSideEncoder from '#lostcity/network/225/outgoing/codec/IfOpenMainSideEncoder.js';
import IfOpenSide from '#lostcity/network/outgoing/model/IfOpenSide.js';
import IfOpenSideEncoder from '#lostcity/network/225/outgoing/codec/IfOpenSideEncoder.js';
import IfSetTab from '#lostcity/network/outgoing/model/IfSetTab.js';
import IfSetTabEncoder from '#lostcity/network/225/outgoing/codec/IfSetTabEncoder.js';
import IfSetAnim from '#lostcity/network/outgoing/model/IfSetAnim.js';
import IfSetAnimEncoder from '#lostcity/network/225/outgoing/codec/IfSetAnimEncoder.js';
import IfSetColour from '#lostcity/network/outgoing/model/IfSetColour.js';
import IfSetColourEncoder from '#lostcity/network/225/outgoing/codec/IfSetColourEncoder.js';
import IfSetHide from '#lostcity/network/outgoing/model/IfSetHide.js';
import IfSetHideEncoder from '#lostcity/network/225/outgoing/codec/IfSetHideEncoder.js';
import IfSetModel from '#lostcity/network/outgoing/model/IfSetModel.js';
import IfSetModelEncoder from '#lostcity/network/225/outgoing/codec/IfSetModelEncoder.js';
import IfSetNpcHead from '#lostcity/network/outgoing/model/IfSetNpcHead.js';
import IfSetNpcHeadEncoder from '#lostcity/network/225/outgoing/codec/IfSetNpcHeadEncoder.js';
import IfSetObject from '#lostcity/network/outgoing/model/IfSetObject.js';
import IfSetObjectEncoder from '#lostcity/network/225/outgoing/codec/IfSetObjectEncoder.js';
import IfSetPlayerHead from '#lostcity/network/outgoing/model/IfSetPlayerHead.js';
import IfSetPlayerHeadEncoder from '#lostcity/network/225/outgoing/codec/IfSetPlayerHeadEncoder.js';
import IfSetPosition from '#lostcity/network/outgoing/model/IfSetPosition.js';
import IfSetPositionEncoder from '#lostcity/network/225/outgoing/codec/IfSetPositionEncoder.js';
import IfSetRecol from '#lostcity/network/outgoing/model/IfSetRecol.js';
import IfSetRecolEncoder from '#lostcity/network/225/outgoing/codec/IfSetRecolEncoder.js';
import IfSetText from '#lostcity/network/outgoing/model/IfSetText.js';
import IfSetTextEncoder from '#lostcity/network/225/outgoing/codec/IfSetTextEncoder.js';
import IfSetTabActive from '#lostcity/network/outgoing/model/IfSetTabActive.js';
import IfSetTabActiveEncoder from '#lostcity/network/225/outgoing/codec/IfSetTabActiveEncoder.js';
import LastLoginInfo from '#lostcity/network/outgoing/model/LastLoginInfo.js';
import LastLoginInfoEncoder from '#lostcity/network/225/outgoing/codec/LastLoginInfoEncoder.js';
import LocAddChange from '#lostcity/network/outgoing/model/LocAddChange.js';
import LocAddChangeEncoder from '#lostcity/network/225/outgoing/codec/LocAddChangeEncoder.js';
import LocAnim from '#lostcity/network/outgoing/model/LocAnim.js';
import LocAnimEncoder from '#lostcity/network/225/outgoing/codec/LocAnimEncoder.js';
import LocDel from '#lostcity/network/outgoing/model/LocDel.js';
import LocDelEncoder from '#lostcity/network/225/outgoing/codec/LocDelEncoder.js';
import LocMerge from '#lostcity/network/outgoing/model/LocMerge.js';
import LocMergeEncoder from '#lostcity/network/225/outgoing/codec/LocMergeEncoder.js';
import Logout from '#lostcity/network/outgoing/model/Logout.js';
import LogoutEncoder from '#lostcity/network/225/outgoing/codec/LogoutEncoder.js';
import MapAnim from '#lostcity/network/outgoing/model/MapAnim.js';
import MapAnimEncoder from '#lostcity/network/225/outgoing/codec/MapAnimEncoder.js';
import MapProjAnim from '#lostcity/network/outgoing/model/MapProjAnim.js';
import MapProjAnimEncoder from '#lostcity/network/225/outgoing/codec/MapProjAnimEncoder.js';
import MessageGame from '#lostcity/network/outgoing/model/MessageGame.js';
import MessageGameEncoder from '#lostcity/network/225/outgoing/codec/MessageGameEncoder.js';
import MessagePrivateEncoder from '#lostcity/network/225/outgoing/codec/MessagePrivateEncoder.js';
import MessagePrivate from '#lostcity/network/outgoing/model/MessagePrivate.js';
import MidiJingle from '#lostcity/network/outgoing/model/MidiJingle.js';
import MidiJingleEncoder from '#lostcity/network/225/outgoing/codec/MidiJingleEncoder.js';
import MidiSong from '#lostcity/network/outgoing/model/MidiSong.js';
import MidiSongEncoder from '#lostcity/network/225/outgoing/codec/MidiSongEncoder.js';
import ObjAdd from '#lostcity/network/outgoing/model/ObjAdd.js';
import ObjAddEncoder from '#lostcity/network/225/outgoing/codec/ObjAddEncoder.js';
import ObjCount from '#lostcity/network/outgoing/model/ObjCount.js';
import ObjCountEncoder from '#lostcity/network/225/outgoing/codec/ObjCountEncoder.js';
import ObjDel from '#lostcity/network/outgoing/model/ObjDel.js';
import ObjDelEncoder from '#lostcity/network/225/outgoing/codec/ObjDelEncoder.js';
import ObjReveal from '#lostcity/network/outgoing/model/ObjReveal.js';
import ObjRevealEncoder from '#lostcity/network/225/outgoing/codec/ObjRevealEncoder.js';
import PCountDialog from '#lostcity/network/outgoing/model/PCountDialog.js';
import PCountDialogEncoder from '#lostcity/network/225/outgoing/codec/PCountDialogEncoder.js';
import ResetAnims from '#lostcity/network/outgoing/model/ResetAnims.js';
import ResetAnimsEncoder from '#lostcity/network/225/outgoing/codec/ResetAnimsEncoder.js';
import ResetClientVarCache from '#lostcity/network/outgoing/model/ResetClientVarCache.js';
import ResetClientVarCacheEncoder from '#lostcity/network/225/outgoing/codec/ResetClientVarCacheEncoder.js';
import SetMultiway from '#lostcity/network/outgoing/model/SetMultiway.js';
import SetMultiwayEncoder from '#lostcity/network/225/outgoing/codec/SetMultiwayEncoder.js';
import SynthSound from '#lostcity/network/outgoing/model/SynthSound.js';
import SynthSoundEncoder from '#lostcity/network/225/outgoing/codec/SynthSoundEncoder.js';
import TutFlash from '#lostcity/network/outgoing/model/TutFlash.js';
import TutFlashEncoder from '#lostcity/network/225/outgoing/codec/TutFlashEncoder.js';
import TutOpen from '#lostcity/network/outgoing/model/TutOpen.js';
import TutOpenEncoder from '#lostcity/network/225/outgoing/codec/TutOpenEncoder.js';
import UnsetMapFlag from '#lostcity/network/outgoing/model/UnsetMapFlag.js';
import UnsetMapFlagEncoder from '#lostcity/network/225/outgoing/codec/UnsetMapFlagEncoder.js';
import UpdateFriendList from '#lostcity/network/outgoing/model/UpdateFriendList.js';
import UpdateFriendListEncoder from '#lostcity/network/225/outgoing/codec/UpdateFriendListEncoder.js';
import UpdateIgnoreList from '#lostcity/network/outgoing/model/UpdateIgnoreList.js';
import UpdateIgnoreListEncoder from '#lostcity/network/225/outgoing/codec/UpdateIgnoreListEncoder.js';
import UpdateInvFull from '#lostcity/network/outgoing/model/UpdateInvFull.js';
import UpdateInvFullEncoder from '#lostcity/network/225/outgoing/codec/UpdateInvFullEncoder.js';
import UpdateInvPartial from '#lostcity/network/outgoing/model/UpdateInvPartial.js';
import UpdateInvPartialEncoder from '#lostcity/network/225/outgoing/codec/UpdateInvPartialEncoder.js';
import UpdateInvStopTransmit from '#lostcity/network/outgoing/model/UpdateInvStopTransmit.js';
import UpdateInvStopTransmitEncoder from '#lostcity/network/225/outgoing/codec/UpdateInvStopTransmitEncoder.js';
import UpdateRunEnergy from '#lostcity/network/outgoing/model/UpdateRunEnergy.js';
import UpdateRunEnergyEncoder from '#lostcity/network/225/outgoing/codec/UpdateRunEnergyEncoder.js';
import UpdateRunWeight from '#lostcity/network/outgoing/model/UpdateRunWeight.js';
import UpdateRunWeightEncoder from '#lostcity/network/225/outgoing/codec/UpdateRunWeightEncoder.js';
import UpdateStat from '#lostcity/network/outgoing/model/UpdateStat.js';
import UpdateStatEncoder from '#lostcity/network/225/outgoing/codec/UpdateStatEncoder.js';
import UpdateUid192 from '#lostcity/network/outgoing/model/UpdateUid192.js';
import UpdateUid192Encoder from '#lostcity/network/225/outgoing/codec/UpdateUid192Encoder.js';
import UpdateZoneFullFollows from '#lostcity/network/outgoing/model/UpdateZoneFullFollows.js';
import UpdateZoneFullFollowsEncoder from '#lostcity/network/225/outgoing/codec/UpdateZoneFullFollowsEncoder.js';
import UpdateZonePartialFollows from '#lostcity/network/outgoing/model/UpdateZonePartialFollows.js';
import UpdateZonePartialFollowsEncoder from '#lostcity/network/225/outgoing/codec/UpdateZonePartialFollowsEncoder.js';
import UpdateZonePartialEnclosed from '#lostcity/network/outgoing/model/UpdateZonePartialEnclosed.js';
import UpdateZonePartialEnclosedEncoder from '#lostcity/network/225/outgoing/codec/UpdateZonePartialEnclosedEncoder.js';
import VarpLarge from '#lostcity/network/outgoing/model/VarpLarge.js';
import VarpLargeEncoder from '#lostcity/network/225/outgoing/codec/VarpLargeEncoder.js';
import VarpSmall from '#lostcity/network/outgoing/model/VarpSmall.js';
import VarpSmallEncoder from '#lostcity/network/225/outgoing/codec/VarpSmallEncoder.js';
import NpcInfo from '#lostcity/network/outgoing/model/NpcInfo.js';
import NpcInfoEncoder from '#lostcity/network/225/outgoing/codec/NpcInfoEncoder.js';
import ZoneMessage from '#lostcity/network/outgoing/ZoneMessage.js';
import ZoneMessageEncoder from '#lostcity/network/outgoing/codec/ZoneMessageEncoder.js';
import UpdateRebootTimer from '#lostcity/network/outgoing/model/UpdateRebootTimer.js';
import UpdateRebootTimerEncoder from '#lostcity/network/225/outgoing/codec/UpdateRebootTimerEncoder.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
type GenericOutgoingMessage<T extends OutgoingMessage> = new (...args: any[]) => T;

class ServerProtRepository {
    private encoders: Map<GenericOutgoingMessage<OutgoingMessage>, MessageEncoder<OutgoingMessage>> = new Map();

    private bind<T extends OutgoingMessage>(message: GenericOutgoingMessage<T>, encoder: MessageEncoder<T>) {
        if (this.encoders.has(message)) {
            throw new Error(`[ServerProtRepository] Already defines a ${message.name}.`);
        }
        this.encoders.set(message, encoder);
    }

    constructor() {
        this.bind(CamLookAt, new CamLookAtEncoder());
        this.bind(CamMoveTo, new CamMoveToEncoder());
        this.bind(CamReset, new CamResetEncoder());
        this.bind(CamShake, new CamShakeEncoder());
        this.bind(ChatFilterSettings, new ChatFilterSettingsEncoder());
        this.bind(DataLand, new DataLandEncoder());
        this.bind(DataLandDone, new DataLandDoneEncoder());
        this.bind(DataLoc, new DataLocEncoder());
        this.bind(DataLocDone, new DataLocDoneEncoder());
        this.bind(EnableTracking, new EnableTrackingEncoder());
        this.bind(FinishTracking, new FinishTrackingEncoder());
        this.bind(HintArrow, new HintArrowEncoder());
        this.bind(IfClose, new IfCloseEncoder());
        this.bind(IfOpenChat, new IfOpenChatEncoder());
        this.bind(IfOpenMain, new IfOpenMainEncoder());
        this.bind(IfOpenMainSide, new IfOpenMainSideEncoder());
        this.bind(IfOpenSide, new IfOpenSideEncoder());
        this.bind(IfSetTab, new IfSetTabEncoder());
        this.bind(IfSetAnim, new IfSetAnimEncoder());
        this.bind(IfSetColour, new IfSetColourEncoder());
        this.bind(IfSetHide, new IfSetHideEncoder());
        this.bind(IfSetModel, new IfSetModelEncoder());
        this.bind(IfSetNpcHead, new IfSetNpcHeadEncoder());
        this.bind(IfSetObject, new IfSetObjectEncoder());
        this.bind(IfSetPlayerHead, new IfSetPlayerHeadEncoder());
        this.bind(IfSetPosition, new IfSetPositionEncoder());
        this.bind(IfSetRecol, new IfSetRecolEncoder());
        this.bind(IfSetText, new IfSetTextEncoder());
        this.bind(IfSetTabActive, new IfSetTabActiveEncoder());
        this.bind(LastLoginInfo, new LastLoginInfoEncoder());
        this.bind(LocAddChange, new LocAddChangeEncoder());
        this.bind(LocAnim, new LocAnimEncoder());
        this.bind(LocDel, new LocDelEncoder());
        this.bind(LocMerge, new LocMergeEncoder());
        this.bind(Logout, new LogoutEncoder());
        this.bind(MapAnim, new MapAnimEncoder());
        this.bind(MapProjAnim, new MapProjAnimEncoder());
        this.bind(MessageGame, new MessageGameEncoder());
        this.bind(MessagePrivate, new MessagePrivateEncoder());
        this.bind(MidiJingle, new MidiJingleEncoder());
        this.bind(MidiSong, new MidiSongEncoder());
        this.bind(NpcInfo, new NpcInfoEncoder());
        this.bind(ObjAdd, new ObjAddEncoder());
        this.bind(ObjCount, new ObjCountEncoder());
        this.bind(ObjDel, new ObjDelEncoder());
        this.bind(ObjReveal, new ObjRevealEncoder());
        this.bind(PCountDialog, new PCountDialogEncoder());
        this.bind(PlayerInfo, new PlayerInfoEncoder());
        this.bind(RebuildNormal, new RebuildNormalEncoder());
        this.bind(ResetAnims, new ResetAnimsEncoder());
        this.bind(ResetClientVarCache, new ResetClientVarCacheEncoder());
        this.bind(SetMultiway, new SetMultiwayEncoder());
        this.bind(SynthSound, new SynthSoundEncoder());
        this.bind(TutFlash, new TutFlashEncoder());
        this.bind(TutOpen, new TutOpenEncoder());
        this.bind(UnsetMapFlag, new UnsetMapFlagEncoder());
        this.bind(UpdateFriendList, new UpdateFriendListEncoder());
        this.bind(UpdateIgnoreList, new UpdateIgnoreListEncoder());
        this.bind(UpdateInvFull, new UpdateInvFullEncoder());
        this.bind(UpdateInvPartial, new UpdateInvPartialEncoder());
        this.bind(UpdateInvStopTransmit, new UpdateInvStopTransmitEncoder());
        this.bind(UpdateRunEnergy, new UpdateRunEnergyEncoder());
        this.bind(UpdateRunWeight, new UpdateRunWeightEncoder());
        this.bind(UpdateRebootTimer, new UpdateRebootTimerEncoder());
        this.bind(UpdateStat, new UpdateStatEncoder());
        this.bind(UpdateUid192, new UpdateUid192Encoder());
        this.bind(UpdateZoneFullFollows, new UpdateZoneFullFollowsEncoder());
        this.bind(UpdateZonePartialEnclosed, new UpdateZonePartialEnclosedEncoder());
        this.bind(UpdateZonePartialFollows, new UpdateZonePartialFollowsEncoder());
        this.bind(VarpLarge, new VarpLargeEncoder());
        this.bind(VarpSmall, new VarpSmallEncoder());
    }

    getEncoder<T extends OutgoingMessage>(message: T): MessageEncoder<T> | undefined {
        return this.encoders.get(message.constructor as GenericOutgoingMessage<T>);
    }

    getZoneEncoder<T extends ZoneMessage>(message: T): ZoneMessageEncoder<T> | undefined {
        return this.encoders.get(message.constructor as GenericOutgoingMessage<T>) as ZoneMessageEncoder<T> | undefined;
    }
}

export default new ServerProtRepository();
