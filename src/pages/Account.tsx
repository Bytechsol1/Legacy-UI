import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, History, Shield, CreditCard, LogOut, Settings, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const transactions = [
  { id: 1, type: "Deposit", amount: "+$5,000.00", date: "2026-02-20", status: "Completed" },
  { id: 2, type: "Withdrawal", amount: "-$1,200.00", date: "2026-02-18", status: "Processing" },
  { id: 3, type: "Bet Win", amount: "+$850.00", date: "2026-02-15", status: "Completed" },
  { id: 4, type: "Deposit", amount: "+$2,000.00", date: "2026-02-10", status: "Completed" },
];

export const Account = () => {
  const [activeTab, setActiveTab] = useState("Wallet");

  const renderContent = () => {
    switch (activeTab) {
      case "Wallet":
        return (
          <div className="space-y-6">
            {/* Wallet Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-legacy-green-800 to-legacy-green-900 border-legacy-gold-500/20">
                <CardContent className="p-6">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Total Balance</p>
                  <h3 className="text-3xl font-mono font-bold text-white mb-4">$12,450.00</h3>
                  <Button variant="gold" size="sm" className="w-full">Deposit</Button>
                </CardContent>
              </Card>
              <Card className="bg-legacy-green-800/30 border-legacy-gold-500/10">
                <CardContent className="p-6">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Bonus Balance</p>
                  <h3 className="text-3xl font-mono font-bold text-legacy-gold-400 mb-4">$500.00</h3>
                  <Button variant="outline" size="sm" className="w-full">Claim Bonus</Button>
                </CardContent>
              </Card>
              <Card className="bg-legacy-green-800/30 border-legacy-gold-500/10">
                <CardContent className="p-6">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Withdrawable</p>
                  <h3 className="text-3xl font-mono font-bold text-white mb-4">$11,950.00</h3>
                  <Button variant="outline" size="sm" className="w-full">Withdraw</Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Transactions */}
            <Card className="bg-legacy-green-800/30 border-legacy-gold-500/10">
              <CardHeader>
                <CardTitle className="text-lg">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-legacy-gold-500/20 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${tx.type === 'Deposit' || tx.type === 'Bet Win' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {tx.type === 'Deposit' || tx.type === 'Bet Win' ? <Wallet className="h-4 w-4" /> : <CreditCard className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{tx.type}</p>
                          <p className="text-gray-500 text-xs">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-mono font-bold ${tx.type === 'Deposit' || tx.type === 'Bet Win' ? 'text-green-400' : 'text-white'}`}>
                          {tx.amount}
                        </p>
                        <p className="text-xs text-legacy-gold-400">{tx.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case "Bet History":
        return (
          <Card className="bg-legacy-green-800/30 border-legacy-gold-500/10">
            <CardHeader>
              <CardTitle>Bet History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">Your recent bets will appear here.</p>
            </CardContent>
          </Card>
        );
      case "Transactions":
        return (
           <Card className="bg-legacy-green-800/30 border-legacy-gold-500/10">
            <CardHeader>
              <CardTitle>All Transactions</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-legacy-gold-500/20 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${tx.type === 'Deposit' || tx.type === 'Bet Win' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {tx.type === 'Deposit' || tx.type === 'Bet Win' ? <Wallet className="h-4 w-4" /> : <CreditCard className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{tx.type}</p>
                          <p className="text-gray-500 text-xs">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-mono font-bold ${tx.type === 'Deposit' || tx.type === 'Bet Win' ? 'text-green-400' : 'text-white'}`}>
                          {tx.amount}
                        </p>
                        <p className="text-xs text-legacy-gold-400">{tx.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </CardContent>
          </Card>
        );
      case "Responsible Gaming":
        return (
          <Card className="bg-legacy-green-800/30 border-legacy-gold-500/10">
            <CardHeader>
              <CardTitle>Responsible Gaming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Set your deposit limits and cool-off periods.</p>
              <Button variant="outline">Set Deposit Limit</Button>
            </CardContent>
          </Card>
        );
      case "Settings":
        return (
          <Card className="bg-legacy-green-800/30 border-legacy-gold-500/10">
             <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Manage your profile and security preferences.</p>
              <Button variant="outline">Change Password</Button>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="bg-legacy-green-800/50 border-legacy-gold-500/10">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-legacy-gold-500/20 rounded-full flex items-center justify-center mb-4 border border-legacy-gold-500/50">
                  <User className="h-10 w-10 text-legacy-gold-400" />
                </div>
                <h2 className="text-xl font-serif font-bold text-white">James Bond</h2>
                <p className="text-sm text-legacy-gold-400 uppercase tracking-widest">VIP Gold Member</p>
              </CardContent>
            </Card>

            <nav className="space-y-1">
              {[
                { name: "Wallet", icon: Wallet },
                { name: "Bet History", icon: History },
                { name: "Transactions", icon: CreditCard },
                { name: "Responsible Gaming", icon: Shield },
                { name: "Settings", icon: Settings },
                { name: "Logout", icon: LogOut, color: "text-red-400" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.name 
                      ? "bg-legacy-gold-500/10 text-legacy-gold-400 border border-legacy-gold-500/20" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  } ${item.color || ""}`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
