const Member = require('../models/member');

exports.getMembers = async (req, res, next) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        next(error);
    }
};

exports.createMember = async (req, res, next) => {
    try {
        const member = new Member(req.body);
        await member.save();
        res.status(201).json(member);
    } catch (error) {
        next(error);
    }
};

exports.updateMember = async (req, res, next) => {
    try {
        const member = await Member.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json(member);
    } catch (error) {
        next(error);
    }
};

exports.deleteMember = async (req, res, next) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json({ message: 'Member deleted successfully' });
    } catch (error) {
        next(error);
    }
};
