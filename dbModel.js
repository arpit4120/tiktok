import mongoose from 'mongoose';

const tiktokSchema=mongoose.Schema({
  url:String,
  description:String,
  likes:String,
  Messages:String,
  shares:String,
  song:String,
  channel:String
});

export default mongoose.model('tiktokVideo',tiktokSchema);
