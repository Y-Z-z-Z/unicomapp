import Link from "next/link"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Gift, MessageCircle, Settings, Home, User, Wallet } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function HomePage() {
  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <div className="w-full h-full bg-gray-200 rounded-full" />
          </Avatar>
          <div>
            <div className="text-lg">q*皓</div>
            <Link href="/level">
              <div className="flex items-center gap-1 text-amber-700 bg-amber-50 rounded-full px-2 py-0.5 text-sm">
                <Crown className="w-4 h-4" />
                Lv.5 五星级客户
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Badge className="bg-orange-500">10元</Badge>
          <Settings className="w-6 h-6" />
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-red-500">68</Badge>
          </div>
        </div>
      </header>

      {/* Package Info */}
      <Card className="mx-4 mb-4">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold bg-gradient-to-r from-gray-700 to-amber-200 bg-clip-text text-transparent">
            我的套餐 (OCS)双4G流量王
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="flex items-center justify-between">
            <span>宽带</span>
            <span className="text-gray-500">前往办理 →</span>
          </div>
          <div className="flex items-center justify-between">
            <span>副卡</span>
            <span className="text-gray-500">领取专属号卡 →</span>
          </div>
          <div className="flex items-center justify-between">
            <span>合约</span>
            <span className="text-gray-500">购机至多直降4950元 →</span>
          </div>
          <div className="flex items-center justify-between">
            <span>云盘</span>
            <span className="text-gray-500">剩余空间 10G →</span>
          </div>
        </div>
      </Card>

      {/* Broadband Promo */}
      <div className="mx-4 mb-4 relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
        <div className="mb-2">多档位可选</div>
        <div className="text-2xl font-bold mb-2">200M宽带 低至1元/天</div>
        <div className="text-sm opacity-75 mb-4">跨市房子优选</div>
        <Button variant="secondary" className="rounded-full">
          免费预约 →
        </Button>
      </div>

      {/* Gift Section */}
      <div className="mx-4 mb-4">
        <h2 className="text-lg font-bold mb-4">我的礼包</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">话费券</div>
          </div>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">语音包</div>
          </div>
          <div>
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">流量包</div>
          </div>
          <div>
            <Gift className="w-8 h-8 mx-auto mb-1" />
            <div className="text-sm text-gray-500">全部礼包</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto grid grid-cols-5 gap-1 p-2">
          {[
            { icon: Home, label: "首页" },
            { icon: Gift, label: "服务" },
            { icon: Gift, label: "领700券", badge: "11.11" },
            { icon: Wallet, label: "财富" },
            { icon: User, label: "我的", active: true },
          ].map((item, i) => (
            <button
              key={i}
              className={cn(
                "flex flex-col items-center gap-1",
                item.active && "text-red-500"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
              {item.badge && (
                <Badge className="absolute -top-2 bg-red-500">{item.badge}</Badge>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

